import React, { useCallback, useState, useEffect } from "react";

import "./login.scss";
import bg_sign_in from "../../assets/images/BG.png";
import bg_forget_pass from "../../assets/images/bg-forget-pass.png";
import bg_register from "../../assets/images/bg-register.png";
import SignIn from "./components/signIn/index";
import ForgotPass, {
  TYPE_STEP_FORGOT_PASS,
} from "./components/forgotPass/index";
import SignUp, { TYPE_STEP_SIGN_UP } from "./components/signUp/index";
import ConfirmModal, {
  TYPE_ACTION_BUTTON,
} from "../../components/ConfirmModal/index";
import { useLoading } from "../../components/Loading/index";

export const TYPE = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOT_PASS: "forgot_pass",
};

export const REGEX_EMAIL = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
export const REGEX_PASS = /^(?=.*\d)((?=.*[a-z])|(?=.*[A-Z]))[0-9a-zA-Z]{6,}$/;

const bgUrls = {
  sign_in: bg_sign_in,
  sign_up: bg_register,
  forgot_pass: bg_forget_pass,
};

const Login = () => {
  const [typeForm, setTypeForm] = useState(TYPE.SIGN_IN);
  const [LoadingComponent, setIsLoading] = useLoading();

  useEffect(() => {
    setDataSignInErrMsg({});
    setDataSignUpErrMsg({});
    setDataForgotPassErrMsg({});
  }, [typeForm]);

  //
  //----------------------------------SIGN IN----------------------------------
  //

  const [dataSignInErrMsg, setDataSignInErrMsg] = useState({});

  const onSubmitSignIn = useCallback((email, password) => {
    setDataSignInErrMsg({});
    const errData = {};

    // ---- test ----
    if (email !== "test@gmail.com" || !email.length)
      errData.email = "Email chưa được đăng ký hoặc sai định dạng";
    if (password !== "ab1234" || !password.length)
      errData.password = "Mật khẩu không đúng";
    // ---- test ----

    if (Object.keys(errData).length) setDataSignInErrMsg(errData);
    else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, []);

  //
  //----------------------------------SIGN UP----------------------------------
  //

  const [isShowConfirmSignUpModal, setIsShowConfirmSignUpModal] =
    useState(false);
  const [stepTypeSignUp, setStepTypeSignUp] = useState(
    TYPE_STEP_SIGN_UP.SIGN_UP
  );
  const [dataSignUpErrMsg, setDataSignUpErrMsg] = useState({});

  const onSubmitSignUp = useCallback(
    (email, password, firstName, lastName, code) => {
      setDataSignUpErrMsg({});
      const errData = {};

      // ---- test ----
      if (email !== "test@gmail.com" || !email.length)
        errData.email = "Email chưa được đăng ký hoặc sai định dạng";
      if (password !== "ab1234" || !password.length)
        errData.password = "Mật khẩu không đúng định dạnh";
      if (!firstName.length) errData.firstName = "Vui lòng nhập thông tin";
      if (!lastName.length) errData.lastName = "Vui lòng nhập thông tin";
      if (code.length > 0 && code !== "abc123")
        errData.code = "Không tìm thấy ID hoặc lỗi định dạng";
      // ---- test ----

      Object.keys(errData).length
        ? setDataSignUpErrMsg(errData)
        : setStepTypeSignUp(TYPE_STEP_SIGN_UP.INFO_VERIFY);
    },
    []
  );

  const onResendCodeVerify = useCallback(() => {
    // call api send code verify to email
  }, []);

  const onSendVerifyCode = useCallback((code) => {
    setDataSignUpErrMsg({});
    const errData = {};

    // ---- test ----
    if (code !== "123456") errData.verifyCode = "Mã xác thực không đúng";
    // ---- test ----

    Object.keys(errData).length
      ? setDataSignUpErrMsg(errData)
      : setIsShowConfirmSignUpModal(true);
  }, []);

  //
  //----------------------------------FORGET PASSWORD----------------------------------
  //
  const [stepTypeForgotPass, setStepTypeForgotPass] = useState(
    TYPE_STEP_FORGOT_PASS.INPUT_EMAIL
  );
  const [dataForgotPassErrMsg, setDataForgotPassErrMsg] = useState({});
  const [isShowModalConfirmForgotPass, setIsShowModalConfirmForgotPass] =
    useState(false);

  const onSubmitForgotPass = useCallback((newPassword, passwordConfirm) => {
    console.log({ newPassword, passwordConfirm });
    setIsShowModalConfirmForgotPass(true);
  }, []);

  const onVerifyEmail = useCallback((email) => {
    setDataForgotPassErrMsg({});
    const errData = {};

    // ---- test ----
    if (email !== "test@gmail.com")
      errData.email = "Email chưa được đăng ký hoặc sai định dạng";
    // ---- test ----

    Object.keys(errData).length
      ? setDataForgotPassErrMsg(errData)
      : setStepTypeForgotPass(TYPE_STEP_FORGOT_PASS.VERIFY_CODE);
  }, []);

  const onVerifyCode = useCallback((code) => {
    setDataForgotPassErrMsg({});
    const errData = {};

    // ---- test ----
    if (code !== "123456") errData.verifyCode = "Mã xác thực không đúng";
    // ---- test ----

    Object.keys(errData).length
      ? setDataForgotPassErrMsg(errData)
      : setStepTypeForgotPass(TYPE_STEP_FORGOT_PASS.CREATE_NEW_PASS);
  }, []);

  const onResendCode = useCallback(() => {
    // call api send code verify to email
  }, []);

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgUrls[typeForm]})` }}
    >
      {typeForm === TYPE.SIGN_IN && (
        <SignIn
          onSubmit={onSubmitSignIn}
          onChangeFormType={(type) => setTypeForm(type)}
          dataErrMsg={dataSignInErrMsg}
        />
      )}
      {typeForm === TYPE.FORGOT_PASS && (
        <ForgotPass
          onSubmit={onSubmitForgotPass}
          onChangeFormType={setTypeForm}
          onResendCode={onResendCode}
          stepTypeForgotPass={stepTypeForgotPass}
          dataErrMsg={dataForgotPassErrMsg}
          onSetStepType={setStepTypeForgotPass}
          onVerifyEmail={onVerifyEmail}
          onVerifyCode={onVerifyCode}
        />
      )}
      {typeForm === TYPE.SIGN_UP && (
        <SignUp
          onSubmitRegister={onSubmitSignUp}
          onChangeFormType={setTypeForm}
          stepTypeSignUp={stepTypeSignUp}
          onSetStepType={(v) => setStepTypeSignUp(v)}
          dataErrMsg={dataSignUpErrMsg}
          onSendVerifyCode={onSendVerifyCode}
          onResendCodeVerify={onResendCodeVerify}
        />
      )}
      <ConfirmModal
        titleData={{ title: "Đăng ký tài khoản thành công!", type: "success" }}
        listActions={[
          { text: "Thoát", type: TYPE_ACTION_BUTTON.CANCEL },
          { text: "Đăng nhập", type: TYPE_ACTION_BUTTON.OK },
        ]}
        handleConfirm={() => {
          setIsShowConfirmSignUpModal(false);
          setTypeForm(TYPE.SIGN_IN);
          setStepTypeSignUp(TYPE_STEP_SIGN_UP.SIGN_UP);
        }}
        handleCloseModal={() => {
          setIsShowConfirmSignUpModal(false);
          setTypeForm(TYPE.SIGN_IN);
          setStepTypeSignUp(TYPE_STEP_SIGN_UP.SIGN_UP);
        }}
        showModal={isShowConfirmSignUpModal}
      />
      <ConfirmModal
        titleData={{
          title: "Cập nhật mật khẩu mới thành công.",
          type: "success",
        }}
        listActions={[
          { text: "Thoát", type: TYPE_ACTION_BUTTON.CANCEL },
          { text: "Đăng nhập lại", type: TYPE_ACTION_BUTTON.OK },
        ]}
        handleConfirm={() => {
          setIsShowModalConfirmForgotPass(false);
          setTypeForm(TYPE.SIGN_IN);
          setStepTypeForgotPass(TYPE_STEP_FORGOT_PASS.INPUT_EMAIL);
        }}
        handleCloseModal={() => {
          setIsShowModalConfirmForgotPass(false);
        }}
        showModal={isShowModalConfirmForgotPass}
      />
      {LoadingComponent}
    </div>
  );
};

export default Login;
