import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgetPassword1.module.css";

const ForgetPassword1 = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/reset-password-1");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onTestsTextClick = useCallback(() => {
    navigate("/testtaker-login");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.forgetPassword1}>
      <div className={styles.testtakerSignUp}>
        <div className={styles.testtakerSignUpInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.forgetPasswordParent}>
                  <b className={styles.forgetPassword}>Forget Password</b>
                  <div className={styles.enterEmailOr}>
                    Enter email or phone number
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.emailOrPhoneNumberParent}>
                    <div className={styles.forgetPassword}>
                      Email or phone number
                    </div>
                    <div className={styles.frameChild} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.submitWrapper}
              onClick={onFrameContainer5Click}
            >
              <div className={styles.submit}>Submit</div>
            </div>
          </div>
        </div>
        <div className={styles.loginToAccessYourAccountWrapper}>
          <div className={styles.loginToAccess}>
            Login to access your account
          </div>
        </div>
        <div className={styles.forgotYourPasswordParent}>
          <div className={styles.forgotYourPassword}>Forgot your password?</div>
          <div className={styles.resetWrapper}>
            <div className={styles.forgetPassword}>Reset</div>
          </div>
        </div>
        <img
          className={styles.copy1Icon}
          alt=""
          src="/110092401-copy-1@2x.png"
        />
        <img
          className={styles.testtakerSignUpChild}
          alt=""
          src="/rectangle-11@2x.png"
        />
        <div className={styles.testtakerSignUpItem} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-10@2x.png"
          onClick={onRectangleImage1Click}
        />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.loginregister}>Login/Register</div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupItem} />
        <div className={styles.about} onClick={onAboutTextClick}>
          About
        </div>
        <div className={styles.tests} onClick={onTestsTextClick}>
          Tests
        </div>
        <div className={styles.contactUs} onClick={onContactUsTextClick}>
          Contact Us
        </div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword1;
