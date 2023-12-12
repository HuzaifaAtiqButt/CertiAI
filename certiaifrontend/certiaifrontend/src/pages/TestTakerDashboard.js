import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestTakerDashboard.module.css";

const TestTakerDashboard = () => {
  const navigate = useNavigate();

  const onAddDefaultersContainerClick = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onAddDefaultersContainer1Click = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onQualificationAndCVClick = useCallback(() => {
    navigate("/tests-purchased");
  }, [navigate]);

  const onUploadTestsContainerClick = useCallback(() => {
    navigate("/take-tests");
  }, [navigate]);

  const onGroupContainer32Click = useCallback(() => {
    navigate("/testtaker-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/view-progress1");
  }, [navigate]);

  const onTestTakerProfileTextClick = useCallback(() => {
    navigate("/testtaker-profile");
  }, [navigate]);

  const onRectangleImage31Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  return (
    <div className={styles.testtakerDashboard}>
      <div className={styles.group}>
        <img className={styles.groupChild} alt="" src="/rectangle-84.svg" />
        <div className={styles.todaysFeesCollectionContainer}>
          <span>{`Start Taking Tests and Build your Career as a TestTaker in the World of `}</span>
          <b>CertiAI</b>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon} alt="" src="/group2.svg" />
      <img
        className={styles.testtakerDashboardChild}
        alt=""
        src="/group-13650.svg"
      />
      <img
        className={styles.testtakerDashboardItem}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.testtakerDashboardInner} />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div
        className={styles.addDefaulters1}
        onClick={onAddDefaultersContainer1Click}
      >
        <div className={styles.addDefaultersItem} />
        <img className={styles.icon1} alt="" src="/1.svg" />
      </div>
      <b className={styles.complaints}>Your Courses/Tests</b>
      <div className={styles.testtakerDashboardChild1} />
      <b className={styles.complaints1}>Notifications</b>
      <b className={styles.complaints2}>Your Uploads</b>
      <div className={styles.complaints3}>Instructors</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle7@2x.png"
          />
          <div className={styles.byAsimAhmad}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.ocp}>OCP</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle8@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.ocp}>OCE</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle8@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.oja}>OJA</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle9@2x.png"
          />
          <div className={styles.byAsimAhmad3}>by Asim Ahmad</div>
        </div>
        <b className={styles.ocja}>OCJA</b>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupItem} />
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad4}>by Asim Ahmad</div>
          <b className={styles.ocja1}>OCJA</b>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupItem} />
          <div className={styles.ocp}>OCP</div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad5}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupItem} />
          <div className={styles.ocp}>OCE</div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad5}>by Asim Ahmad</div>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild6} />
        <div className={styles.davidJustUploaded}>David just Uploaded OCP</div>
        <img
          className={styles.rectangleIcon7}
          alt=""
          src="/rectangle4@2x.png"
        />
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild7} />
        <div className={styles.johnUpdatedOcja}>John Updated OCJA</div>
        <img
          className={styles.rectangleIcon8}
          alt=""
          src="/rectangle10@2x.png"
        />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild8} />
        <div className={styles.usmanQadirNotifys}>
          Usman Qadir notifys you about the newly introduced test category
        </div>
        <img
          className={styles.rectangleIcon9}
          alt=""
          src="/rectangle11@2x.png"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild9} />
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild9} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild9} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.groupChild9} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent17}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent19}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent20}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent21}>
          <div className={styles.groupChild9} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent22}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent23}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent24}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent25}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent26}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent27}>
          <div className={styles.groupChild9} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
      </div>
      <div className={styles.seeMore}>See More</div>
      <div className={styles.exploreTheCommunity}>Explore the Community</div>
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <div className={styles.testtakerDashboardInner1}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.qualificationAndCv}
            onClick={onQualificationAndCVClick}
          >
            <div className={styles.students}>Tests Purchased</div>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
          <div
            className={styles.uploadTests}
            onClick={onUploadTestsContainerClick}
          >
            <div className={styles.team}>Take Tests</div>
            <img
              className={styles.teacherSvgrepoCom1Icon}
              alt=""
              src="/teachersvgrepocom-1.svg"
            />
          </div>
          <div className={styles.vectorGroup} onClick={onGroupContainer32Click}>
            <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.manageTests}>
            <div
              className={styles.academics}
              onClick={onAcademicsTextClick}
            >{`View Progress `}</div>
            <img
              className={styles.iconMetroBooks}
              alt=""
              src="/icon-metrobooks.svg"
            />
          </div>
          <div
            className={styles.testtakerProfile}
            onClick={onTestTakerProfileTextClick}
          >
            <span>📄</span>
            <span className={styles.testtakerProfile1}> TestTaker Profile</span>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-10@2x.png"
            onClick={onRectangleImage31Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Payments
        </div>
        <img className={styles.groupIcon1} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default TestTakerDashboard;
