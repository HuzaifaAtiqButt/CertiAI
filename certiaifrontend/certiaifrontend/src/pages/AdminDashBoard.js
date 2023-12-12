import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminDashBoard.module.css";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const onTestTakersContainerClick = useCallback(() => {
    navigate("/testtakers-manage");
  }, [navigate]);

  const onInstructorsContainerClick = useCallback(() => {
    navigate("/instructors-manage");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/test-environment-manage");
  }, [navigate]);

  const onAddDefaultersContainerClick = useCallback(() => {
    navigate("/testtakers-add1");
  }, [navigate]);

  const onAddDefaultersContainer1Click = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onViewDetailsText12Click = useCallback(() => {
    navigate("/payments-reports");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/payments-reports");
  }, [navigate]);

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.group}>
        <img className={styles.groupChild} alt="" src="/rectangle-84.svg" />
        <div className={styles.todaysFeesCollection}>
          Today's Payment Collection : Rs 14,00,00,000
        </div>
        <div className={styles.totalFeesCollected}>
          Total Payments Collected : Rs 7,50,00,000
        </div>
        <div className={styles.totalFeesOutstanding}>
          Total Payments Paid : Rs 7,50,00,000
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
        <div className={styles.pooranMalYadav}>Anwar</div>
        <div className={styles.seniorAdmin}>Admin</div>
        <img className={styles.clipPathGroup} alt="" src="/1.svg" />
        <img className={styles.groupItem} alt="" src="/rectangle-61@2x.png" />
      </div>
      <img
        className={styles.adminDashboardChild}
        alt=""
        src="/group-13342.svg"
      />
      <div className={styles.adminDashboardInner}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.testtakers}
            onClick={onTestTakersContainerClick}
          >
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
              src="/teachersvgrepocom-1.svg"
            />
          </div>
          <div className={styles.vectorGroup} onClick={onGroupContainer2Click}>
            <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-10@2x.png"
            onClick={onRectangleImage1Click}
          />
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
        </div>
      </div>
      <div className={styles.adminDashboardItem} />
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
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.complaints}>TestTakers</div>
      <div className={styles.complaints1}>Instructors</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Joe</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Virat</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Smith</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Kane</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Babar</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Hafeez</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Afrdi</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle14@2x.png"
          />
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupInner} />
          <div className={styles.joe}>Vishaka Shekhawat</div>
          <div className={styles.contentCurator}>Content Curator</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle15@2x.png"
          />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild13} />
          <div className={styles.viewDetails7}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild13} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails8}>View Details</div>
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent15}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent16}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent17}>
          <div className={styles.groupChild13} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails8}>View Details</div>
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.groupChild13} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails8}>View Details</div>
        </div>
        <div className={styles.rectangleParent19}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent20}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent21}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent22}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent23}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent24}>
          <div className={styles.groupChild13} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails8}>View Details</div>
        </div>
        <div className={styles.rectangleParent25}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent26}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent27}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent28}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent29}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent30}>
          <div className={styles.groupChild13} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon13}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
      </div>
      <div className={styles.viewDetails12} onClick={onViewDetailsText12Click}>
        View Details
      </div>
      <div className={styles.payments}>
        <div className={styles.calendar} onClick={onCalendarTextClick}>
          Payments
        </div>
        <img className={styles.groupIcon1} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default AdminDashBoard;
