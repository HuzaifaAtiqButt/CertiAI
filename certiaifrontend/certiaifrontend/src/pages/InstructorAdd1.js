import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorAdd1.module.css";

const InstructorAdd1 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/instructor-add2");
  }, [navigate]);

  const onTestTakersContainerClick = useCallback(() => {
    navigate("/testtakers-manage");
  }, [navigate]);

  const onInstructorsContainerClick = useCallback(() => {
    navigate("/instructors-manage");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/test-environment-manage");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/payments-reports");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.instructorAdd1}>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon} alt="" src="/group2.svg" />
      <div className={styles.pooranMalYadavParent}>
        <div className={styles.pooranMalYadav}>Anwar</div>
        <div className={styles.seniorAdmin}>Admin</div>
        <img className={styles.clipPathGroup} alt="" src="/1.svg" />
        <img className={styles.groupChild} alt="" src="/rectangle-61@2x.png" />
      </div>
      <img
        className={styles.instructorAdd1Child}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.instructorAdd1Item} />
      <div className={styles.instructorAdd1Inner} />
      <div className={styles.enterName}>Enter Name</div>
      <div className={styles.ankitDixit}>Ankit Dixit</div>
      <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.add}>Add</div>
      </div>
      <div className={styles.enterEmail}>Enter Email</div>
      <div className={styles.password}>Password</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.ankitdixit01210gmailcom}>
        AnkiTDIXIT01210@GMAIL.COM
      </div>
      <div className={styles.instructorAdd1Child1} />
      <div className={styles.div}>9251466357</div>
      <div className={styles.welcomePooran}>Add Instructor</div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
        <div className={styles.testtakers} onClick={onTestTakersContainerClick}>
          <div className={styles.students}>TestTakers</div>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
        <div
          className={styles.instructors}
          onClick={onInstructorsContainerClick}
        >
          <div className={styles.team}>Instructors</div>
          <img
            className={styles.teacherSvgrepoCom1Icon}
            alt=""
            src="/teachersvgrepocom-12.svg"
          />
        </div>
        <div className={styles.vectorGroup} onClick={onGroupContainer2Click}>
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <div className={styles.testEnvironment}>
          <div className={styles.academics} onClick={onAcademicsTextClick}>
            Test Environment
          </div>
          <img
            className={styles.iconMetroBooks}
            alt=""
            src="/icon-metrobooks.svg"
          />
        </div>
        <div className={styles.payments}>
          <div className={styles.calendar} onClick={onCalendarTextClick}>
            Payments
          </div>
          <img className={styles.groupIcon1} alt="" src="/group.svg" />
        </div>
        <img
          className={styles.frameItem}
          alt=""
          src="/rectangle-10@2x.png"
          onClick={onRectangleImage1Click}
        />
      </div>
    </div>
  );
};

export default InstructorAdd1;
