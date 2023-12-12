import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsDashboard.module.css";

const InstructorsDashboard = () => {
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

  const onGroupContainer33Click = useCallback(() => {
    navigate("/instructors-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/instructors-manage-tests");
  }, [navigate]);

  const onInstructorProfileTextClick = useCallback(() => {
    navigate("/instructors-profile");
  }, [navigate]);

  const onRectangleImage32Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/instructors-your-payments");
  }, [navigate]);

  return (
    <div className={styles.instructorsDashboard}>
      <div className={styles.group}>
        <img className={styles.groupChild} alt="" src="/rectangle-84.svg" />
        <div className={styles.todaysFeesCollectionContainer}>
          <span>{`Start Uploading Tests and Build your Career as an Instructor in the World of `}</span>
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
      <div className={styles.pooranMalYadavParent}>
        <div className={styles.pooranMalYadav}>Asim</div>
        <div className={styles.seniorAdmin}>Ahmad</div>
        <img className={styles.clipPathGroup} alt="" src="/1.svg" />
        <img className={styles.groupItem} alt="" src="/rectangle-61@2x.png" />
      </div>
      <img
        className={styles.instructorsDashboardChild}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.instructorsDashboardItem} />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.instructorsDashboardInner} />
      <div
        className={styles.addDefaulters1}
        onClick={onAddDefaultersContainer1Click}
      >
        <div className={styles.addDefaultersItem} />
        <img className={styles.icon1} alt="" src="/1.svg" />
      </div>
      <b className={styles.complaints}>Your Uploads</b>
      <div className={styles.rectangleDiv} />
      <b className={styles.complaints1}>Notifications</b>
      <b className={styles.complaints2}>Your Uploads</b>
      <div className={styles.complaints3}>Instructors</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle7@2x.png"
          />
          <div className={styles.byAsimAhmad}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.ocp}>OCP</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle8@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.ocp}>OCE</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle8@2x.png"
          />
          <div className={styles.byAsimAhmad1}>by Asim Ahmad</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild3} />
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
          <div className={styles.groupInner} />
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad4}>by Asim Ahmad</div>
          <b className={styles.ocja1}>OCJA</b>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupInner} />
          <div className={styles.ocp}>OCP</div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle3@2x.png"
          />
          <div className={styles.byAsimAhmad5}>by Asim Ahmad</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupInner} />
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
        <div className={styles.groupChild7} />
        <div className={styles.huzaifaButtJust}>
          Huzaifa Butt just Purchased OCP
        </div>
        <img
          className={styles.rectangleIcon7}
          alt=""
          src="/rectangle12@2x.png"
        />
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild8} />
        <div className={styles.zainAleemRated}>Zain Aleem Rated OCJA</div>
        <img
          className={styles.rectangleIcon8}
          alt=""
          src="/rectangle13@2x.png"
        />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild9} />
        <div className={styles.usmanQadirLeft}>
          Usman Qadir left a review in OCJA
        </div>
        <img
          className={styles.rectangleIcon9}
          alt=""
          src="/rectangle11@2x.png"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild10} />
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild10} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.groupChild10} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon10}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent22}>
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
          <div className={styles.groupChild10} />
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
      <div className={styles.exploreAndHelp}>
        Explore and Help the Community Grow and Thrive
      </div>
      <div className={styles.instructorsDashboardInner1}>
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
          <div className={styles.vectorGroup} onClick={onGroupContainer33Click}>
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.manageTests}>
            <div className={styles.academics} onClick={onAcademicsTextClick}>
              Manage Tests
            </div>
            <img
              className={styles.iconMetroBooks}
              alt=""
              src="/icon-metrobooks.svg"
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
            onClick={onRectangleImage32Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Your Payments
        </div>
        <img className={styles.groupIcon1} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default InstructorsDashboard;
