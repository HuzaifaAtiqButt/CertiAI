import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword2.module.css";

const ResetPassword2 = () => {
  const navigate = useNavigate();

  const onFrame1Click = useCallback(() => {
    navigate("/password-reset-1");
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
    <div className={styles.resetPassword2}>
      <div className={styles.testtakerSignUp}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.resetPasswordParent}>
                  <b className={styles.resetPassword}>Reset Password</b>
                  <div className={styles.enterYourNew}>
                    Enter your new password
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.passwordParent}>
                    <div className={styles.resetPassword}>Password</div>
                    <img
                      className={styles.eyeslashfillIcon}
                      alt=""
                      src="/eyeslashfill.svg"
                    />
                  </div>
                  <div className={styles.frameChild} />
                </div>
                <div />
              </div>
            </div>
          </div>
          <div className={styles.frameItem} onClick={onFrame1Click} />
          <div className={styles.frameParent1}>
            <div className={styles.passwordParent}>
              <div className={styles.resetPassword}>Password</div>
              <img
                className={styles.eyeslashfillIcon}
                alt=""
                src="/eyeslashfill.svg"
              />
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.confirmPassword}>Confirm password</div>
          <div className={styles.labelText}>Verify and Proceed</div>
        </div>
        <div className={styles.loginToAccessYourAccountWrapper}>
          <div className={styles.loginToAccess}>
            Login to access your account
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
          className={styles.testtakerSignUpInner}
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

export default ResetPassword2;
