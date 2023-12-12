import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsManageTests.module.css";

const InstructorsManageTests = () => {
  const navigate = useNavigate();

  const onAddDefaultersContainerClick = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onAddDefaultersContainer1Click = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onUploadTestsContainerClick = useCallback(() => {
    navigate("/instructors-upload-tests");
  }, [navigate]);

  const onGroupContainer21Click = useCallback(() => {
    navigate("/instructors-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/instructors-manage-tests");
  }, [navigate]);

  const onInstructorProfileTextClick = useCallback(() => {
    navigate("/instructors-profile");
  }, [navigate]);

  const onRectangleImage22Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/instructors-your-payments");
  }, [navigate]);

  return (
    <div className={styles.instructorsManageTests}>
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon1} alt="" src="/group2.svg" />
      <img
        className={styles.instructorsManageTestsChild}
        alt=""
        src="/group-13342.svg"
      />
      <img
        className={styles.instructorsManageTestsItem}
        alt=""
        src="/rectangle-559.svg"
      />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.instructorsManageTestsInner} />
      <div
        className={styles.addDefaulters1}
        onClick={onAddDefaultersContainer1Click}
      >
        <div className={styles.addDefaultersItem} />
        <img className={styles.icon1} alt="" src="/1.svg" />
      </div>
      <div className={styles.complaints}>Instructors</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent17}>
          <div className={styles.groupChild} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.instructorsManageTestsChild1}
        alt=""
        src="/group-13650.svg"
      />
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <b className={styles.manageTests}>Manage Tests</b>
      <img
        className={styles.instructorsManageTestsChild2}
        alt=""
        src="/rectangle-61@2x.png"
      />
      <div className={styles.thead}>
        <div className={styles.testName}>Test Name</div>
        <div className={styles.testId}> Test ID</div>
        <div className={styles.uploadDate}>Upload Date</div>
        <div className={styles.fileFormat}>File Format</div>
        <div className={styles.duration}>Duration</div>
      </div>
      <div className={styles.instructorsManageTestsChild3} />
      <div className={styles.ocja}>OCJA</div>
      <div className={styles.mins}>30 mins</div>
      <div className={styles.excel}>Excel</div>
      <div className={styles.aug2022}>08-Aug, 2022</div>
      <div className={styles.instructorsManageTestsChild4} />
      <div className={styles.ocp}>OCP</div>
      <div className={styles.mins1}>20 mins</div>
      <div className={styles.text}>Text</div>
      <div className={styles.may2021}>21-May, 2021</div>
      <div className={styles.instructorsManageTestsChild5} />
      <div className={styles.ocjp}>OCJP</div>
      <div className={styles.mins2}>45 mins</div>
      <div className={styles.text1}>Text</div>
      <div className={styles.mar2023}>18-Mar, 2023</div>
      <div className={styles.instructorsManageTestsChild6} />
      <div className={styles.oja}>OJA</div>
      <div className={styles.mins3}>20 mins</div>
      <div className={styles.excel1}>Excel</div>
      <div className={styles.apr2023}>14-Apr, 2023</div>
      <div className={styles.instructorsManageTestsChild7} />
      <div className={styles.ojjdc}>OJJDC</div>
      <div className={styles.mins4}>60 mins</div>
      <div className={styles.text2}>Text</div>
      <div className={styles.march2023}>22-March, 2023</div>
      <div className={styles.instructorsManageTestsChild8} />
      <div className={styles.jjpac}>JJPAC</div>
      <div className={styles.div}>20302010</div>
      <div className={styles.div1}>75920274</div>
      <div className={styles.div2}>9205738</div>
      <div className={styles.div3}>75840234</div>
      <div className={styles.div4}>59802858</div>
      <div className={styles.div5}>593827650</div>
      <div className={styles.mins5}>50 mins</div>
      <div className={styles.excel2}>Excel</div>
      <div className={styles.feb2023}>12-Feb, 2023</div>
      <div className={styles.loadMore}>Load More</div>
      <img className={styles.trash3Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen3Icon} alt="" src="/pen-3.svg" />
      <img className={styles.trash4Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen4Icon} alt="" src="/pen-3.svg" />
      <img className={styles.trash5Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen5Icon} alt="" src="/pen-3.svg" />
      <img className={styles.trash6Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen6Icon} alt="" src="/pen-3.svg" />
      <img className={styles.trash7Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen7Icon} alt="" src="/pen-3.svg" />
      <img className={styles.trash1Icon} alt="" src="/trash-3.svg" />
      <img className={styles.pen1Icon} alt="" src="/pen-3.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.uploadTests}
            onClick={onUploadTestsContainerClick}
          >
            <div className={styles.team}>Upload Tests</div>
            <img
              className={styles.teacherSvgrepoCom1Icon}
              alt=""
              src="/teachersvgrepocom-1.svg"
            />
          </div>
          <div className={styles.vectorGroup} onClick={onGroupContainer21Click}>
            <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.manageTests1}>
            <div className={styles.academics} onClick={onAcademicsTextClick}>
              Manage Tests
            </div>
            <img
              className={styles.iconMetroBooks}
              alt=""
              src="/icon-metrobooks1.svg"
            />
          </div>
          <div
            className={styles.instructorProfile}
            onClick={onInstructorProfileTextClick}
          >
            <span>📄</span>
            <span className={styles.instructorProfile1}>
              {" "}
              Instructor Profile
            </span>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-10@2x.png"
            onClick={onRectangleImage22Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Your Payments
        </div>
        <img className={styles.groupIcon2} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default InstructorsManageTests;
