import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsProfile.module.css";

const InstructorsProfile = () => {
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

  const onGroupContainer22Click = useCallback(() => {
    navigate("/instructors-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/instructors-manage-tests");
  }, [navigate]);

  const onInstructorProfileTextClick = useCallback(() => {
    navigate("/instructors-profile");
  }, [navigate]);

  const onRectangleImage23Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/instructors-your-payments");
  }, [navigate]);

  return (
    <div className={styles.instructorsProfile}>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon} alt="" src="/group2.svg" />
      <img
        className={styles.instructorsProfileChild}
        alt=""
        src="/group-13342.svg"
      />
      <img
        className={styles.instructorsProfileItem}
        alt=""
        src="/rectangle-5592.svg"
      />
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.instructorsProfileInner} />
      <div
        className={styles.addDefaulters1}
        onClick={onAddDefaultersContainer1Click}
      >
        <div className={styles.addDefaultersItem} />
        <img className={styles.icon1} alt="" src="/1.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.complaints}>Instructors</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.registeredDateContainer}>
          <p className={styles.registeredDate}>
            <b>Registered Date :</b>
          </p>
          <p className={styles.p}> 19-12-2023</p>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.alex}>Alex</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.azam}>Azam</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
          <div className={styles.attendance}>Attendance</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupItem} />
          <div className={styles.azam}>Dhoni</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupItem} />
          <div className={styles.azam}>Roy</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
          <div className={styles.attendance}>Fees</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupItem} />
          <div className={styles.azam}>Shaheen</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.viewDetails1}>View Details</div>
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupItem} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Nawaz</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
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
          <div className={styles.groupItem} />
          <div className={styles.attendance}>Mischief</div>
          <div className={styles.alex}>Rahul Singh</div>
          <div className={styles.coJvy}>3CO-JVY</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent18}>
          <div className={styles.groupItem} />
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
        className={styles.instructorsProfileChild1}
        alt=""
        src="/group-13650.svg"
      />
      <div className={styles.rajAnadkat}>
        <p className={styles.registeredDate}>{`Raj `}</p>
        <p className={styles.registeredDate}>Anadkat</p>
      </div>
      <div className={styles.personalDetailsParent}>
        <b className={styles.personalDetails}>Personal details</b>
        <div className={styles.frameParent}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Name :</div>
            <div className={styles.mrInstructor}>Mr. Instructor</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Contact no :</div>
            <div className={styles.mrInstructor}>+92-3223434342</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Email :</div>
            <div className={styles.mrInstructor}>instructor@gmal.com</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Password :</div>
            <div className={styles.mrInstructor}>XXXXXXXXXX</div>
          </div>
        </div>
      </div>
      <b className={styles.profile}>PROFILE</b>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-562@2x.png" />
        <div />
      </div>
      <div className={styles.changeImageParent}>
        <div className={styles.changeImage}>Change image</div>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
      </div>
      <img
        className={styles.instructorsProfileChild2}
        alt=""
        src="/rectangle-61@2x.png"
      />
      <div className={styles.count}>
        <div className={styles.countChild} />
        <img
          className={styles.graduationCap1Icon}
          alt=""
          src="/graduationcap-1.svg"
        />
        <div className={styles.purchases}>Purchases</div>
        <b className={styles.b}>243</b>
      </div>
      <div className={styles.count1}>
        <div className={styles.countItem} />
        <img className={styles.bookmark1Icon} alt="" src="/bookmark-1.svg" />
        <div className={styles.certificationtests}>CertificationTests</div>
        <b className={styles.b1}>24</b>
      </div>
      <div className={styles.count2}>
        <div className={styles.countInner} />
        <img className={styles.usdSquare1Icon} alt="" src="/usdsquare-1.svg" />
        <div className={styles.amountEarned}>Amount Earned</div>
        <b className={styles.inr556000}>
          <span>{`INR `}</span>
          <span className={styles.span}>556,000</span>
        </b>
      </div>
      <div className={styles.count3}>
        <div className={styles.countChild} />
        <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
        <div className={styles.instructorRating}>Instructor Rating</div>
        <b className={styles.b2}>8/10</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.vectorGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-7.svg" />
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
          <div
            className={styles.vectorContainer}
            onClick={onGroupContainer22Click}
          >
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
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
            <span className={styles.span1}>{`     `}</span>
            <span className={styles.instructorProfile1}>
              Instructor Profile
            </span>
          </div>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-10@2x.png"
            onClick={onRectangleImage23Click}
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

export default InstructorsProfile;
