import React, { useState } from "react";
import "./forgotPass.scss";

import Input from "../../../../components/Input/index";
import { TYPE, REGEX_EMAIL, REGEX_PASS } from "../../index";
import { ReactComponent as SMS } from "../../../../assets/icons/sms.svg";
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg";
import Button from "../../../../components/Button/index";
import thumbnail from "../../../../assets/images/thumbnail-forgot-pass.png";
import VerifyCode from "../verifyCode/index";

export const TYPE_STEP_FORGOT_PASS = {
  INPUT_EMAIL: "input_email",
  VERIFY_CODE: "verify_code",
  CREATE_NEW_PASS: "create_new_pass",
};

const ForgotPass = ({
  onChangeFormType,
  onSubmit,
  onResendCode,
  stepTypeForgotPass,
  dataErrMsg, // dataErrMsg includes property: {email, verifyCode}
  onSetStepType,
  onVerifyEmail,
  onVerifyCode,
}) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className="forgot-pass-container">
      <div className="wrapper-form">
        {stepTypeForgotPass === TYPE_STEP_FORGOT_PASS.INPUT_EMAIL && (
          <>
            <div className="header">
              <ArrowLeft onClick={() => onChangeFormType(TYPE.SIGN_IN)} />
              <span>QUÊN MẬT KHẨU</span>
            </div>
            <div className="sub-title">
              Đừng lo lắng, chúng tôi sẽ giúp bạn tìm lại mật khẩu.
            </div>
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
            <Button
              text="Tiếp tục"
              onClick={() => onVerifyEmail(email)}
              disabled={!REGEX_EMAIL.test(email) || !email}
              className="mt-40"
            />
          </>
        )}
        {stepTypeForgotPass === TYPE_STEP_FORGOT_PASS.VERIFY_CODE && (
          <VerifyCode
            onSendVerifyCode={onVerifyCode}
            onBack={() => {
              onSetStepType(TYPE_STEP_FORGOT_PASS.INPUT_EMAIL);
              setEmail("");
            }}
            emailVerify={email}
            dataErrMsg={dataErrMsg}
            onResendCodeVerify={onResendCode}
            title="Quên mật khẩu"
          />
        )}
        {stepTypeForgotPass === TYPE_STEP_FORGOT_PASS.CREATE_NEW_PASS && (
          <div className="wrapper-box">
            <div className="header">
              <ArrowLeft
                onClick={() => {
                  onSetStepType(TYPE_STEP_FORGOT_PASS.VERIFY_CODE);
                  setNewPassword("");
                  setPasswordConfirm("");
                }}
              />
              <span>Tạo mật khẩu mới</span>
            </div>
            <Input
              placeholder="Nhập mật khẩu mới (bao gồm 6 ký tự)"
              emitValue={setNewPassword}
              errorMgs="Mật khẩu phải tối thiểu 6 ký tự bao gồm cả chữ và số"
              type="password"
              isValid={REGEX_PASS.test(newPassword)}
            />
            <Input
              placeholder="Nhập lại mật khẩu mới"
              errorMgs={`${
                newPassword === passwordConfirm
                  ? "Mật khẩu phải tối thiểu 6 ký tự bao gồm cả chữ và số"
                  : "Mật khẩu không khớp"
              }`}
              type="password"
              emitValue={setPasswordConfirm}
              isValid={
                REGEX_PASS.test(passwordConfirm) &&
                newPassword === passwordConfirm
              }
            />
            <Button
              text="Cập nhật mật khẩu"
              disabled={
                !REGEX_PASS.test(newPassword) ||
                !REGEX_PASS.test(passwordConfirm) ||
                newPassword !== passwordConfirm
              }
              onClick={() => onSubmit(newPassword, passwordConfirm)}
            />
          </div>
        )}
      </div>
      <img className="thumbnail" alt="thumbnail" src={thumbnail} />
    </div>
  );
};

export default ForgotPass;
