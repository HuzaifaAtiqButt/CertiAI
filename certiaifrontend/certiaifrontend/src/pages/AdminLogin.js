import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const onFrameContainer7Click = useCallback(() => {
    navigate("/admin-dashboard");
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
    <div className={styles.adminLogin}>
      <div className={styles.adminLoginInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.loginParent}>
                <b className={styles.login}>Login</b>
                <div className={styles.enterYourAccount}>
                  Enter your account details
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.emailParent}>
                  <div className={styles.login}>Email</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.emailParent}>
                  <div className={styles.passwordParent}>
                    <div className={styles.login}>Password</div>
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
          </div>
          <div className={styles.loginWrapper} onClick={onFrameContainer7Click}>
            <div className={styles.login}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeToAdminPortalParent}>
        <div className={styles.welcomeToAdminContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.welcomeTo}>Admin portal</p>
        </div>
        <div className={styles.enterYourAccount}>
          Login to access your account
        </div>
      </div>
      <div className={styles.dontHaveAnAccountParent}>
        <div className={styles.login}>Don’t have an account?</div>
        <div className={styles.signUpWrapper}>
          <div className={styles.login}>Sign up</div>
        </div>
      </div>
      <img className={styles.copy1Icon} alt="" src="/110092401-copy-1@2x.png" />
      <img
        className={styles.adminLoginChild}
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className={styles.adminLoginItem} />
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

export default AdminLogin;
