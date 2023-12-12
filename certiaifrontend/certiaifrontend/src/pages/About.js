import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
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
    <div className={styles.about}>
      <div className={styles.aboutChild} />
      <div className={styles.aboutItem} />
      <div className={styles.aboutInner}>
        <div className={styles.frameChild} data-scroll-to="ellipse" />
      </div>
      <div className={styles.ellipseDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-31@2x.png" />
      <img
        className={styles.aboutChild1}
        alt=""
        src="/rectangle-6@2x.png"
        onClick={onRectangleImage1Click}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.aboutMe}>
        <b className={styles.aboutUs}>About US</b>
        <div className={styles.welcomeToCertiaiContainer}>
          <p className={styles.welcomeToCertiai}>
            Welcome to CertiAI! We are a pioneering platform committed to
            revolutionizing the way individuals learn and excel in their fields.
            At CertiAI, we harness the power of artificial intelligence to
            provide cutting-edge solutions in education and assessment.
          </p>
          <p className={styles.welcomeToCertiai}></p>
          <p className={styles.welcomeToCertiai}>
            Our mission is to empower learners, educators, and institutions by
            offering innovative tools and comprehensive learning environments.
            With a focus on adaptive learning, we tailor our solutions to
            individual needs, ensuring personalized and effective learning
            experiences.
          </p>
          <p className={styles.welcomeToCertiai}></p>
          <p className={styles.welcomeToCertiai}>
            Together, we strive to create a seamless ecosystem that fosters
            knowledge acquisition, skill development, and professional growth.
          </p>
          <p className={styles.welcomeToCertiai}></p>
          <p className={styles.welcomeToCertiai}>
            Join us on this transformative journey as we shape the future of
            learning with CertiAI!
          </p>
          <p className={styles.welcomeToCertiai}></p>
        </div>
      </div>
      <img
        className={styles.aboutChild2}
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
        <div className={styles.about1} onClick={onAboutTextClick}>
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
      </div>
    </div>
  );
};

export default About;
