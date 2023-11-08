import React, { useState } from "react";
import "./signIn.scss";

import Input from "../../../../components/Input/index";
import logo from "../../../../assets/images/logo-form.png";
import thumbnail from "../../../../assets/images/thumbnail-login.png";
import { TYPE, REGEX_EMAIL, REGEX_PASS } from "../../index";
import Button from "../../../../components/Button/index";
import { ReactComponent as SMS } from "../../../../assets/icons/sms.svg";
import { ReactComponent as Linkedin } from "../../../../assets/icons/linkedin.svg";
import { ReactComponent as Facebook } from "../../../../assets/icons/facebook.svg";
import { ReactComponent as Youtube } from "../../../../assets/icons/youtube.svg";
import { ReactComponent as Instagram } from "../../../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../../../assets/icons/twitter.svg";

const SignIn = ({
  onSubmit,
  onChangeFormType,
  dataErrMsg = {}, // dataErrMsg includes property: {firstName, lastName, email, password, code, verifyCode}
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in-container">
      <div className="wrapper-form">
        <img className="logo" src={logo} alt="logo" />
        <div className="title">ĐĂNG NHẬP</div>
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
          <Input
            placeholder="Mật khẩu"
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
        </div>
        <div className="wrapper-line">
          <div className="checkbox">
            <input
              type="checkbox"
              id="save-pass"
              name="save-pass"
              value="Bike"
            />
            <label htmlFor="save-pass">Lưu đăng nhập</label>
          </div>
          <div
            className="link"
            onClick={() => onChangeFormType(TYPE.FORGOT_PASS)}
          >
            Quên mật khẩu?
          </div>
        </div>
        <Button text="Đăng nhập" onClick={() => onSubmit(email, password)} />
        <div
          className="link mt-32 text-center"
          onClick={() => onChangeFormType(TYPE.SIGN_UP)}
        >
          Tạo tài khoản
        </div>

        <div className="wrapper-social-network">
          <Linkedin title="Linkedin" />
          <Instagram title="Instagram" />
          <Youtube title="Youtube" />
          <Twitter title="Twitter" />
          <Facebook title="Facebook" />
        </div>
      </div>
      <img className="thumbnail" alt="thumbnail" src={thumbnail} />
    </div>
  );
};

export default SignIn;
