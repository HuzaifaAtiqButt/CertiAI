import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PasswordReset1.module.css";

const PasswordReset1 = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/testtaker-login");
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
    <div className={styles.passwordReset1}>
      <div className={styles.testtakerSignUp}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.passwordResetWrapper}>
                  <b className={styles.passwordReset}>Password Reset</b>
                </div>
                <div
                  className={styles.passwordHasBeen}
                >{`Password has been reset successfully! `}</div>
                <div />
              </div>
            </div>
          </div>
          <div
            className={styles.labelTextWrapper}
            onClick={onFrameContainer4Click}
          >
            <div className={styles.labelText}>Login</div>
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

export default PasswordReset1;
