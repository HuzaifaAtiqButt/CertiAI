import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewProgress1.module.css";

const ViewProgress1 = () => {
  const navigate = useNavigate();

  const onAddDefaultersContainerClick = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onAddDefaultersContainer1Click = useCallback(() => {
    navigate("/instructor-add1");
  }, [navigate]);

  const onExitTextClick = useCallback(() => {
    navigate("/view-progress1");
  }, [navigate]);

  const onQualificationAndCVClick = useCallback(() => {
    navigate("/tests-purchased");
  }, [navigate]);

  const onUploadTestsContainerClick = useCallback(() => {
    navigate("/take-tests");
  }, [navigate]);

  const onGroupContainer21Click = useCallback(() => {
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
    <div className={styles.viewProgress}>
      <div
        className={styles.addDefaulters}
        onClick={onAddDefaultersContainerClick}
      >
        <div className={styles.addDefaultersChild} />
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <div className={styles.viewProgressChild} />
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
      <img className={styles.viewProgressItem} alt="" src="/group-13650.svg" />
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <b className={styles.pass}>PASS</b>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.viewProgressInner} />
      <div className={styles.frameParent}>
        <div className={styles.downloadPdfWrapper}>
          <div className={styles.downloadPdf}>Download pdf</div>
        </div>
        <div className={styles.downloadPdfWrapper}>
          <div className={styles.exit} onClick={onExitTextClick}>
            Exit
          </div>
        </div>
      </div>
      <b className={styles.answers}>Answers</b>
      <div className={styles.showingParent}>
        <div className={styles.showing}>Showing</div>
        <b className={styles.all}>All</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.question1Parent}>
            <b className={styles.question1}>Question 1</b>
            <div
              className={styles.lremIpsumSara}
            >{`Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa. `}</div>
          </div>
          <div className={styles.options}>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.correctWrapper}>
            <div className={styles.downloadPdf}>Correct</div>
          </div>
          <div className={styles.pointsWrapper}>
            <div className={styles.downloadPdf}>3 points</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.frameContainer}>
          <div className={styles.question1Parent}>
            <b className={styles.question1}>Question 2</b>
            <div
              className={styles.lremIpsumSara}
            >{`Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa. `}</div>
          </div>
          <div className={styles.options1}>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper2}>
                <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper3}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper3}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.lremIpsumSara1}
              >{`Lörem ipsum sara dialören därför att `}</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.wrongWrapper}>
            <div className={styles.downloadPdf}>Wrong</div>
          </div>
          <div className={styles.pointsContainer}>
            <div className={styles.downloadPdf}>3 points</div>
          </div>
        </div>
      </div>
      <div className={styles.viewProgressInner1}>
        <div className={styles.vectorParent}>
          <img className={styles.frameInner} alt="" src="/rectangle-7.svg" />
          <div
            className={styles.qualificationAndCv}
            onClick={onQualificationAndCVClick}
          >
            <div className={styles.students}>Tests Purchased</div>
            <img className={styles.vectorIcon8} alt="" src="/vector1.svg" />
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
          <div className={styles.vectorGroup} onClick={onGroupContainer21Click}>
            <img className={styles.vectorIcon9} alt="" src="/vector3.svg" />
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
              src="/icon-metrobooks1.svg"
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
            className={styles.frameChild1}
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
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default ViewProgress1;
