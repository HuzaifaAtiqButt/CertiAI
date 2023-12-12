import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorViewDetails1.module.css";

const InstructorViewDetails1 = () => {
  const navigate = useNavigate();

  const onTestsPurchasedTextClick = useCallback(() => {
    navigate("/instructor-view-details2");
  }, [navigate]);

  const onStateLayerContainerClick = useCallback(() => {
    navigate("/testtakers-remove1");
  }, [navigate]);

  const onLabelTextClick = useCallback(() => {
    navigate("/instructor-remove1");
  }, [navigate]);

  const onTestTakersContainerClick = useCallback(() => {
    navigate("/testtakers-manage");
  }, [navigate]);

  const onInstructorsContainerClick = useCallback(() => {
    navigate("/instructors-manage");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
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
    <div className={styles.instructorViewDetails1}>
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
        className={styles.instructorViewDetails1Child}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.instructorViewDetails1Item} />
      <div className={styles.instructorProfile}>Instructor Profile</div>
      <div className={styles.rajAnadkat}>Raj Anadkat</div>
      <div className={styles.studentId}>Student ID : Mukesh Anadkat</div>
      <div className={styles.joinDate}>Join Date : 17 Jan 2023</div>
      <div className={styles.fullName}>Full name : Raj Anadkat</div>
      <div className={styles.emailHanumannagarcenterti}>
        Email : hanumannagar.center@tipsg.in
      </div>
      <div className={styles.addressPlot}>
        Address : Plot no. 116, Lane number 4, Rathore nagar, Vaishali nagar ,
        Jaipur
      </div>
      <div className={styles.instructorId}>Instructor ID : TIPSG5682</div>
      <div className={styles.genderFemale}>Gender : Female</div>
      <div className={styles.general}>{`General `}</div>
      <div className={styles.instructorViewDetails1Inner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-100@2x.png" />
      <img
        className={styles.materialSymbolsarrowBackIcon}
        alt=""
        src="/materialsymbolsarrowback.svg"
      />
      <div
        className={styles.testsPurchased}
        onClick={onTestsPurchasedTextClick}
      >
        Tests Purchased
      </div>
      <div className={styles.button}>
        <div className={styles.stateLayer} onClick={onStateLayerContainerClick}>
          <div className={styles.stateLayerChild} />
          <div className={styles.labelText} onClick={onLabelTextClick}>
            Remove
          </div>
        </div>
      </div>
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
        <div className={styles.vectorGroup} onClick={onGroupContainer1Click}>
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

export default InstructorViewDetails1;
