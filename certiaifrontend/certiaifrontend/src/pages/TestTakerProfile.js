import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestTakerProfile.module.css";

const TestTakerProfile = () => {
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

  const onGroupContainer22Click = useCallback(() => {
    navigate("/testtaker-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/view-progress1");
  }, [navigate]);

  const onTestTakerProfileTextClick = useCallback(() => {
    navigate("/testtaker-profile");
  }, [navigate]);

  const onRectangleImage21Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  return (
    <div className={styles.testtakerProfile}>
      <img className={styles.groupIcon} alt="" src="/group4.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon1} alt="" src="/group2.svg" />
      <img
        className={styles.testtakerProfileChild}
        alt=""
        src="/group-13342.svg"
      />
      <img
        className={styles.testtakerProfileItem}
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
      <div className={styles.testtakerProfileInner} />
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
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}> 20-02-2022</p>
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
        className={styles.testtakerProfileChild1}
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
            <div className={styles.msXyz}>Ms. XYZ</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Contact no :</div>
            <div className={styles.msXyz}>98XXXXXXX9</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Email :</div>
            <div className={styles.msXyz}>xyz@gmal.com</div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Password :</div>
            <div className={styles.msXyz}>XXXXXXXXXX</div>
          </div>
        </div>
      </div>
      <div className={styles.bioParent}>
        <b className={styles.personalDetails}>Bio</b>
        <div
          className={styles.lremIpsumSara}
        >{`Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa. Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa. Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa.  `}</div>
      </div>
      <b className={styles.profile}>PROFILE</b>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-101@2x.png" />
        <div />
      </div>
      <div className={styles.changeImageParent}>
        <div className={styles.changeImage}>Change image</div>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.qualificationAndCv}
            onClick={onQualificationAndCVClick}
          >
            <div className={styles.students}>Tests Purchased</div>
            <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
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
          <div className={styles.vectorGroup} onClick={onGroupContainer22Click}>
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
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
            className={styles.testtakerProfile1}
            onClick={onTestTakerProfileTextClick}
          >
            <span>📄</span>
            <span className={styles.span}>{`     `}</span>
            <span className={styles.testtakerProfile2}>TestTaker Profile</span>
          </div>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-10@2x.png"
            onClick={onRectangleImage21Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Payments
        </div>
        <img className={styles.groupIcon2} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default TestTakerProfile;
