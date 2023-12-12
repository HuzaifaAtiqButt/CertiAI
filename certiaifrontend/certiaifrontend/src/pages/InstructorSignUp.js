import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorSignUp.module.css";

const InstructorSignUp = () => {
  const navigate = useNavigate();

  const onFrameContainer9Click = useCallback(() => {
    navigate("/instructor-login");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/instructor-login");
  }, [navigate]);

  const onSwitchToTestTakerClick = useCallback(() => {
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
    <div className={styles.instructorSignUp}>
      <div className={styles.frameParent}>
        <div className={styles.image2Parent}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <b className={styles.signUpWith}>Sign Up with Google</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.signUpParent}>
                <b className={styles.signUpWith}>Sign Up</b>
                <div className={styles.enterYourAccount}>
                  Enter your account details
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.fullNameParent}>
                  <div className={styles.signUpWith}>Full Name</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.fullNameParent}>
                  <div className={styles.signUpWith}>Email</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.fullNameParent}>
                  <div className={styles.passwordParent}>
                    <div className={styles.signUpWith}>Password</div>
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
          <div
            className={styles.signUpWrapper}
            onClick={onFrameContainer9Click}
          >
            <div className={styles.signUpWith}>Sign Up</div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeToInstructorPortalParent}>
        <div className={styles.welcomeToInstructorContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.welcomeTo}>Instructor portal</p>
        </div>
        <div className={styles.enterYourAccount}>
          Login to access your account
        </div>
      </div>
      <div className={styles.alreadyHaveAnAccountParent}>
        <div className={styles.signUpWith}>Already have an account?</div>
        <div className={styles.loginWrapper} onClick={onFrameContainer13Click}>
          <div className={styles.signUpWith}>Login</div>
        </div>
      </div>
      <div className={styles.notAInstructorParent}>
        <div className={styles.signUpWith}>Not A Instructor?</div>
        <div
          className={styles.switchToTesttakerContainer}
          onClick={onSwitchToTestTakerClick}
        >
          <span className={styles.switchTo}>{`Switch to `}</span>
          <span>TestTaker</span>
        </div>
      </div>
      <img
        className={styles.instructorSignUpChild}
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className={styles.instructorSignUpItem} />
      <img
        className={styles.instructorSignUpInner}
        alt=""
        src="/rectangle-10@2x.png"
        onClick={onRectangleImage1Click}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.loginregister}>Login/Register</div>
      </div>
      <img className={styles.copy1Icon} alt="" src="/110092401-copy-1@2x.png" />
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

export default InstructorSignUp;
