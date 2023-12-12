import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorViewDetails2.module.css";

const InstructorViewDetails2 = () => {
  const navigate = useNavigate();

  const onGeneralContainerClick = useCallback(() => {
    navigate("/instructor-view-details1");
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

  const onGroupContainer7Click = useCallback(() => {
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
    <div className={styles.instructorViewDetails2}>
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
        className={styles.instructorViewDetails2Child}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.instructorViewDetails2Item} />
      <div className={styles.instructorProfile}>Instructor Profile</div>
      <div className={styles.alexa}>Alexa</div>
      <div className={styles.instructorId}>Instructor ID : TIPSG5682</div>
      <div className={styles.genderFemale}>Gender : Female</div>
      <div className={styles.general} onClick={onGeneralContainerClick}>
        <div className={styles.general1}>{`General `}</div>
      </div>
      <div className={styles.testsOffered}>Tests Offered</div>
      <div className={styles.instructorViewDetails2Inner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-100@2x.png" />
      <img
        className={styles.materialSymbolsarrowBackIcon}
        alt=""
        src="/materialsymbolsarrowback.svg"
      />
      <div className={styles.totalTestsOffered}>Total Tests Offered : 12</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.ocp}>OCP</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.statusInactive}>Status : Inactive</div>
        <div className={styles.alexa1}>Alexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.ocp}>OCJP</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.statusInactive}>Status : Inactive</div>
        <div className={styles.alexa1}>Alexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.ocp}>OCA</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.statusInactive}>Status : Inactive</div>
        <div className={styles.alexa1}>Alexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupItem} />
        <div className={styles.oce}>OCE</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.statusInactive}>{`Status : Inactive `}</div>
        <div className={styles.alexa1}>Alexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} />
        <div className={styles.ocajp}>OCAJP</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.statusInactive}>Status : Inactive</div>
        <div className={styles.alexa1}>ALexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupItem} />
        <div className={styles.oce}>OCPJP</div>
        <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
        <div className={styles.groupInner} />
        <div className={styles.groupChild15} />
        <div className={styles.statusActive}>Status : Active</div>
        <div className={styles.alexa1}>Alexa</div>
        <div className={styles.pm}>12:40 P:M</div>
        <div className={styles.jan2023}>03 Jan 2023</div>
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      </div>
      <div className={styles.button}>
        <div className={styles.stateLayer}>
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
          <img className={styles.vectorIcon13} alt="" src="/vector1.svg" />
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
        <div className={styles.vectorGroup} onClick={onGroupContainer7Click}>
          <img className={styles.vectorIcon14} alt="" src="/vector3.svg" />
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

export default InstructorViewDetails2;
