import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const onRectangleImage1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ellipse']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginRegisterTextClick = useCallback(() => {
    navigate("/testtaker-login");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
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

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUsChild} />
      <div className={styles.contactUsItem} />
      <div className={styles.contactUsInner}>
        <div className={styles.frameChild} data-scroll-to="ellipse" />
      </div>
      <div className={styles.ellipseDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-31@2x.png" />
      <img
        className={styles.contactUsChild1}
        alt=""
        src="/rectangle-6@2x.png"
        onClick={onRectangleImage1Click}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.aboutMe}>
        <b className={styles.contactUs1}>Contact US</b>
        <div className={styles.haveAQuestionContainer}>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.haveAQuestion}>
              Have a question or want to learn more about CertiAI? Get in touch
              with us!
            </span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.haveAQuestion}>&nbsp;</span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.address}>Address:</span>
            <span
              className={styles.haveAQuestion}
            >{` [Your Physical Address or Headquarters] `}</span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.address}>Email:</span>
            <span>{` `}</span>
            <a
              className={styles.contactcertiaicom}
              href="mailto:contact@certiai.com"
              target="_blank"
            >
              <span>
                <span className={styles.contactcertiaicom1}>
                  contact@certiai.com
                </span>
              </span>
            </a>
            <span>{` `}</span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.address}>Phone:</span>
            <span
              className={styles.haveAQuestion}
            >{` [+1 (XXX) XXX-XXXX] `}</span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.address}>Social Media</span>
            <span className={styles.haveAQuestion}>
              : [Links to your social media profiles]
            </span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.haveAQuestion}>&nbsp;</span>
          </p>
          <p className={styles.haveAQuestionOrWantToLea}>
            <span className={styles.haveAQuestion}>
              We value your feedback and inquiries. Reach out to our team, and
              we'll be delighted to assist you.
            </span>
          </p>
        </div>
      </div>
      <img
        className={styles.contactUsChild2}
        alt=""
        src="/rectangle-1@2x.png"
        onClick={onRectangleImage2Click}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div
          className={styles.loginregister}
          onClick={onLoginRegisterTextClick}
        >
          Login/Register
        </div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.groupItem} />
        <div className={styles.about} onClick={onAboutTextClick}>
          About
        </div>
        <div className={styles.tests} onClick={onTestsTextClick}>
          Tests
        </div>
        <div className={styles.contactUs2} onClick={onContactUsTextClick}>
          Contact Us
        </div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
