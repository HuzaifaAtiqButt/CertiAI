import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/testtaker-login");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginRegisterTextClick = useCallback(() => {
    navigate("/testtaker-login");
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
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <div className={styles.homeInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.ellipseDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-3@2x.png" />
      <b className={styles.theBestWay}>The Best Way For Your Learning</b>
      <div className={styles.thereAreMany}>
        there are many dummy international certification tests to offer with a
        good price. learn from home
      </div>
      <div className={styles.learnFromToday}>LEARN FROM TODAY</div>
      <div className={styles.lineDiv} />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.exploreTests}>Explore Tests</div>
        <img className={styles.groupItem} alt="" src="/line-3.svg" />
      </div>
      <img className={styles.homeChild1} alt="" src="/rectangle-6@2x.png" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.homeChild2}
        alt=""
        src="/rectangle-1@2x.png"
        onClick={onRectangleImage2Click}
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div
          className={styles.loginregister}
          onClick={onLoginRegisterTextClick}
        >
          Login/Register
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupChild1} />
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
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
      </div>
    </div>
  );
};

export default Home;
