import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsManage.module.css";

const InstructorsManage = () => {
  const navigate = useNavigate();

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

  const onStateLayerContainerClick = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onViewDetailsTextClick = useCallback(() => {
    navigate("/instructor-view-details1");
  }, [navigate]);

  const onViewDetailsText1Click = useCallback(() => {
    navigate("/instructor-view-details1");
  }, [navigate]);

  const onViewDetailsText2Click = useCallback(() => {
    navigate("/instructor-view-details1");
  }, [navigate]);

  const onViewDetailsText3Click = useCallback(() => {
    navigate("/instructor-view-details1");
  }, [navigate]);

  const onViewDetailsText4Click = useCallback(() => {
    navigate("/instructor-view-details1");
  }, [navigate]);

  return (
    <div className={styles.instructorsManage}>
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
        className={styles.instructorsManageChild}
        alt=""
        src="/group-13342.svg"
      />
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
      <div className={styles.welcomePooran}>Instructors</div>
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/rectangle-59.svg" />
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon3} alt="" src="/vector12.svg" />
          <div className={styles.activeStudents}>Active Instructors</div>
          <div className={styles.div}>222</div>
          <div className={styles.div1}>+ 15.6%</div>
          <div className={styles.fromPreviousYear}>From Previous Year</div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupInner} alt="" src="/rectangle-57.svg" />
        <div className={styles.dropouts}>Dropouts</div>
        <div className={styles.div2}>12</div>
        <div className={styles.div3}>+ 15.6%</div>
        <div className={styles.fromPreviousYear1}>From Previous Year</div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupInner} alt="" src="/rectangle-57.svg" />
        <div className={styles.totalStudents}>Total Instructors</div>
        <div className={styles.div4}>333</div>
        <div className={styles.div5}>+ 15.6%</div>
        <div className={styles.fromPreviousYear2}>From Previous Year</div>
      </div>
      <div className={styles.button}>
        <div className={styles.stateLayer} onClick={onStateLayerContainerClick}>
          <img className={styles.vectorIcon4} alt="" src="/vector13.svg" />
          <div className={styles.labelText}>Add Instructors</div>
        </div>
      </div>
      <div className={styles.instructorsManageItem} />
      <div className={styles.addDefaulters}>
        <div
          className={styles.addDefaultersChild}
          onClick={onRectangle5Click}
        />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.complaints}>Instructors</div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.viewDetails} onClick={onViewDetailsTextClick}>
            View Details
          </div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
          <div
            className={styles.viewDetails1}
            onClick={onViewDetailsText1Click}
          >
            View Details
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.rectangleDiv} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
          <div
            className={styles.viewDetails1}
            onClick={onViewDetailsText2Click}
          >
            View Details
          </div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.rectangleDiv} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
          <div
            className={styles.viewDetails1}
            onClick={onViewDetailsText3Click}
          >
            View Details
          </div>
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.rectangleDiv} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
          <div
            className={styles.viewDetails1}
            onClick={onViewDetailsText4Click}
          >
            View Details
          </div>
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent17}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.rectangleDiv} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorsManage;
