import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestsPurchased.module.css";

const TestsPurchased = () => {
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

  const onGroupContainer28Click = useCallback(() => {
    navigate("/testtaker-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/view-progress1");
  }, [navigate]);

  const onTestTakerProfileTextClick = useCallback(() => {
    navigate("/testtaker-profile");
  }, [navigate]);

  const onRectangleImage27Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  return (
    <div className={styles.testsPurchased}>
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
        className={styles.testsPurchasedChild}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.testsPurchasedItem} />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.testsPurchasedInner} />
      <div
        className={styles.addDefaulters1}
        onClick={onAddDefaultersContainer1Click}
      >
        <div className={styles.addDefaultersItem} />
        <img className={styles.icon1} alt="" src="/1.svg" />
      </div>
      <b className={styles.complaints}>Purchased Tests</b>
      <div className={styles.rectangleDiv} />
      <b className={styles.complaints1}>Notifications</b>
      <div className={styles.complaints2}>Instructors</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.davidJustUploaded}>David just Uploaded OCP</div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle4@2x.png" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.johnUpdatedOcja}>John Updated OCJA</div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="/rectangle5@2x.png"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild1} />
        <div className={styles.usmanQadirNotifys}>
          Usman Qadir notifys you about the newly introduced test category
        </div>
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="/rectangle6@2x.png"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild2} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild2} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild2} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild2} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent17}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent19}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent20}>
          <div className={styles.groupChild2} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
      </div>
      <div className={styles.exploreTheCommunity}>Explore the Community</div>
      <img
        className={styles.testsPurchasedChild1}
        alt=""
        src="/group-13650.svg"
      />
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent21}>
          <div className={styles.groupChild23} />
          <img
            className={styles.rectangleIcon24}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad}>by Asim Ahmad</div>
          <b className={styles.ocja}>OCJA</b>
        </div>
        <div className={styles.rectangleParent22}>
          <div className={styles.groupChild23} />
          <div className={styles.ocp}>OCP</div>
          <img
            className={styles.rectangleIcon24}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleParent23}>
          <div className={styles.groupChild23} />
          <div className={styles.ocp}>OCE</div>
          <img
            className={styles.rectangleIcon24}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.qualificationAndCv}
            onClick={onQualificationAndCVClick}
          >
            <div className={styles.students}>Tests Purchased</div>
            <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
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
          <div className={styles.vectorGroup} onClick={onGroupContainer28Click}>
            <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
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
            onClick={onRectangleImage27Click}
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

export default TestsPurchased;
