import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsYourPayments.module.css";

const InstructorsYourPayments = () => {
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
    <div className={styles.instructorsYourPayments}>
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
        className={styles.instructorsYourPaymentsChild}
        alt=""
        src="/group-13342.svg"
      />
      <img
        className={styles.instructorsYourPaymentsItem}
        alt=""
        src="/rectangle-5591.svg"
      />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.instructorsYourPaymentsInner} />
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
        className={styles.instructorsYourPaymentsChild1}
        alt=""
        src="/group-13650.svg"
      />
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <b className={styles.paymentDetails}>Payment Details</b>
      <img
        className={styles.instructorsYourPaymentsChild2}
        alt=""
        src="/rectangle-61@2x.png"
      />
      <b className={styles.latestUpdates}>Latest Updates</b>
      <div className={styles.thead}>
        <div className={styles.name}>Name</div>
        <div className={styles.testName}>Test Name</div>
        <div className={styles.paymentId}>Payment ID</div>
        <div className={styles.amountReceieved}> Amount Receieved</div>
        <div className={styles.status}> Status</div>
        <div className={styles.date}>{`Date `}</div>
      </div>
      <div className={styles.th}>
        <img className={styles.thChild} alt="" src="/rectangle-8.svg" />
        <img className={styles.eye1Icon} alt="" src="/eye-1.svg" />
        <div className={styles.mrInstructor}>Mr. Instructor</div>
        <div className={styles.ocja}>OCJA</div>
        <div className={styles.div}>00012223</div>
        <div className={styles.div1}>20$</div>
        <div className={styles.transferred}>Transferred</div>
        <div className={styles.dec2021}>21-Dec, 2021</div>
      </div>
      <div className={styles.th1}>
        <div className={styles.thItem} />
        <div className={styles.mrInstructor1}>Mr. Instructor</div>
        <div className={styles.ocp}>OCP</div>
        <div className={styles.div2}>00012223</div>
        <img className={styles.eye2Icon} alt="" src="/eye-2.svg" />
        <div className={styles.div1}>15$</div>
        <div className={styles.inProcess}>In Process</div>
        <div className={styles.dec2021}>09-Apr, 2022</div>
      </div>
      <div className={styles.th2}>
        <div className={styles.thInner} />
        <img className={styles.eye3Icon} alt="" src="/eye-3.svg" />
        <div className={styles.mrInstructor2}>Mr. Instructor</div>
        <div className={styles.oca}>OCA</div>
        <div className={styles.div4}>00012223</div>
        <div className={styles.div1}>35$</div>
        <div className={styles.inProcess1}>In Process</div>
        <div className={styles.dec2021}>08-May, 2023</div>
      </div>
      <div className={styles.th3}>
        <div className={styles.thItem} />
        <img className={styles.eye4Icon} alt="" src="/eye-4.svg" />
        <div className={styles.mrInstructor3}>Mr. Instructor</div>
        <div className={styles.ocpjp}>OCPJP</div>
        <div className={styles.div}>00012223</div>
        <div className={styles.div1}>10$</div>
        <div className={styles.transferred1}>Transferred</div>
        <div className={styles.transferred2}>Transferred</div>
        <div className={styles.dec2021}>08-Aug, 2023</div>
      </div>
      <div className={styles.lineDiv} />
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
            onClick={onRectangleImage22Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Your Payments
        </div>
        <img className={styles.groupIcon2} alt="" src="/group3.svg" />
      </div>
    </div>
  );
};

export default InstructorsYourPayments;
