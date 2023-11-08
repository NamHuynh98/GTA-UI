import React, { useEffect, useState } from "react";
import "./signUp.scss";

import Input from "../../../../components/Input/index";
import Button from "../../../../components/Button/index";
import logo from "../../../../assets/images/logo-form.png";
import { ReactComponent as SMS } from "../../../../assets/icons/sms.svg";
import { ReactComponent as Gift } from "../../../../assets/icons/gift.svg";
import thumbnail from "../../../../assets/images/thumbnail-register.png";
import VerifyCode from "../verifyCode/index";
import { TYPE, REGEX_EMAIL, REGEX_PASS } from "../../index";

export const TYPE_STEP_SIGN_UP = {
  SIGN_UP: "sign_up",
  INFO_VERIFY: "info_verify",
};

const SignUp = ({
  onChangeFormType,
  onSubmitRegister,
  stepTypeSignUp,
  onSendVerifyCode,
  onSetStepType,
  onResendCodeVerify,
  dataErrMsg = {}, // dataErrMsg includes property: {firstName, lastName, email, password, code, verifyCode}
}) => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerify, setEmailVerify] = useState("");

  const onResetState = () => {
    setCode("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  useEffect(() => {
    setEmailVerify(email);
    onResetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepTypeSignUp]);

  return (
    <div className="sign-up-container">
      {stepTypeSignUp === TYPE_STEP_SIGN_UP.SIGN_UP && (
        <div className="wrapper-form">
          <img className="logo" src={logo} alt="logo" />
          <div className="title">ĐĂNG KÝ</div>
          <div className="wrapper-input">
            <Input
              placeholder="Email"
              errorMgs={
                dataErrMsg.email
                  ? dataErrMsg.email
                  : "Email chưa được đăng ký hoặc sai định dạng"
              }
              type="text"
              icon={<SMS />}
              emitValue={setEmail}
              errRes={dataErrMsg.email}
              isValid={REGEX_EMAIL.test(email) && !dataErrMsg.email}
            />
            <div className="mini-line">
              <Input
                placeholder="Họ"
                type="text"
                errorMgs={
                  dataErrMsg.lastName
                    ? dataErrMsg.lastName
                    : "Họ và tên phải tối thiểu 3 ký tự"
                }
                emitValue={setLastName}
                errRes={dataErrMsg.lastName}
                isValid={lastName.length >= 3 && !dataErrMsg.lastName}
              />
              <Input
                placeholder="Tên"
                type="text"
                errorMgs={
                  dataErrMsg.firstName
                    ? dataErrMsg.firstName
                    : "Họ và tên phải tối thiểu 3 ký tự"
                }
                emitValue={setFirstName}
                errRes={dataErrMsg.firstName}
                isValid={firstName.length >= 3 && !dataErrMsg.firstName}
              />
            </div>
            <Input
              placeholder="Mật khẩu tối thiểu 6 ký tự"
              errorMgs={
                dataErrMsg.password
                  ? dataErrMsg.password
                  : "Mật khẩu phải tối thiểu 6 ký tự bao gồm cả chữ và số"
              }
              type="password"
              emitValue={setPassword}
              errRes={dataErrMsg.password}
              isValid={REGEX_PASS.test(password) && !dataErrMsg.password}
            />
            <Input
              placeholder="ID người giới thiệu (không bắt buộc)"
              type="text"
              errorMgs={dataErrMsg.code ? dataErrMsg.code : ""}
              icon={<Gift />}
              emitValue={setCode}
              errRes={dataErrMsg.code}
              isValid={!dataErrMsg.code && !dataErrMsg.code}
            />
          </div>
          <Button
            text="Đăng ký"
            onClick={() =>
              onSubmitRegister(email, password, firstName, lastName, code)
            }
          />
          <div className="text-footer">
            Nếu bạn đã có tài khoản?
            <span
              className="link"
              onClick={() => onChangeFormType(TYPE.SIGN_IN)}
            >
              Đăng nhập ở đây
            </span>
          </div>
        </div>
      )}
      {stepTypeSignUp === TYPE_STEP_SIGN_UP.INFO_VERIFY && (
        <VerifyCode
          onSendVerifyCode={onSendVerifyCode}
          onBack={() => onSetStepType(TYPE_STEP_SIGN_UP.SIGN_UP)}
          emailVerify={emailVerify}
          dataErrMsg={dataErrMsg}
          onResendCodeVerify={onResendCodeVerify}
          title="Xác thực thông tin"
        />
      )}
      <img className="thumbnail" alt="thumbnail" src={thumbnail} />
    </div>
  );
};

export default SignUp;
