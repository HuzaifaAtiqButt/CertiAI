import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestTakerLogin.module.css";

const TestTakerLogin = () => {
  const navigate = useNavigate();

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forget-password-1");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/testtaker-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/testtaker-sign-up");
  }, [navigate]);

  const onSwitchToInstructorClick = useCallback(() => {
    navigate("/instructor-login");
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
    <div className={styles.testtakerLogin}>
      <div className={styles.frameParent}>
        <div className={styles.image2Parent}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <b className={styles.continueWithGoogle}>Continue with Google</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.loginParent}>
                <b className={styles.continueWithGoogle}>Login</b>
                <div className={styles.enterYourAccount}>
                  Enter your account details
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.emailParent}>
                  <div className={styles.continueWithGoogle}>Email</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.emailParent}>
                  <div className={styles.passwordParent}>
                    <div className={styles.continueWithGoogle}>Password</div>
                    <img
                      className={styles.eyeslashfillIcon}
                      alt=""
                      src="/eyeslashfill.svg"
                    />
                  </div>
                  <div className={styles.frameChild} />
                </div>
              </div>
            </div>
            <div
              className={styles.forgotPassword}
              onClick={onForgotPasswordTextClick}
            >
              Forgot Password?
            </div>
          </div>
          <div className={styles.loginWrapper} onClick={onFrameContainer8Click}>
            <div className={styles.continueWithGoogle}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeToTesttakerPortalParent}>
        <div className={styles.welcomeToTesttakerContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.welcomeTo}>TestTaker portal</p>
        </div>
        <div className={styles.enterYourAccount}>
          Login to access your account
        </div>
      </div>
      <div className={styles.dontHaveAnAccountParent}>
        <div className={styles.continueWithGoogle}>Don’t have an account?</div>
        <div className={styles.signUpWrapper} onClick={onFrameContainer12Click}>
          <div className={styles.continueWithGoogle}>Sign up</div>
        </div>
      </div>
      <img className={styles.copy1Icon} alt="" src="/110092401-copy-1@2x.png" />
      <div className={styles.notATesttakerParent}>
        <div className={styles.continueWithGoogle}>
          <span>Not A TestTaker?</span>
        </div>
        <div
          className={styles.switchToInstructor}
          onClick={onSwitchToInstructorClick}
        >
          Switch to Instructor
        </div>
      </div>
      <img
        className={styles.testtakerLoginChild}
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className={styles.testtakerLoginItem} />
      <img
        className={styles.testtakerLoginInner}
        alt=""
        src="/rectangle-10@2x.png"
        onClick={onRectangleImage1Click}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.loginregister}>Login/Register</div>
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

export default TestTakerLogin;
