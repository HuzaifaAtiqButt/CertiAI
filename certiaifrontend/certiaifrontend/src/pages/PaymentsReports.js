import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentsReports.module.css";

const PaymentsReports = () => {
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

  const onCreditContainerClick = useCallback(() => {
    navigate("/payments-credit");
  }, [navigate]);

  const onDebitContainerClick = useCallback(() => {
    navigate("/payments-debit");
  }, [navigate]);

  return (
    <div className={styles.paymentsReports}>
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
        className={styles.paymentsReportsChild}
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
            src="/teachersvgrepocom-1.svg"
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
          <img className={styles.groupIcon1} alt="" src="/group6.svg" />
        </div>
        <img
          className={styles.frameItem}
          alt=""
          src="/rectangle-10@2x.png"
          onClick={onRectangleImage1Click}
        />
      </div>
      <div className={styles.paymentsReportsItem} />
      <div className={styles.reports}>Reports</div>
      <div className={styles.credit} onClick={onCreditContainerClick}>
        <div className={styles.downloadChart}>Credit</div>
      </div>
      <div className={styles.debit} onClick={onDebitContainerClick}>
        <div className={styles.downloadChart}>Debit</div>
      </div>
      <div className={styles.paymentsReportsInner} />
      <div className={styles.from}>From</div>
      <div className={styles.to}>to</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.paymentsReportsChild1} />
      <div className={styles.div}>12-01-2023</div>
      <div className={styles.div1}>12-01-2023</div>
      <img className={styles.uiscalenderIcon} alt="" src="/uiscalender.svg" />
      <img className={styles.uiscalenderIcon1} alt="" src="/uiscalender.svg" />
      <div className={styles.creditDebitComp}>
        <img
          className={styles.creditDebitCompChild}
          alt=""
          src="/rectangle-40.svg"
        />
        <img
          className={styles.creditDebitCompItem}
          alt=""
          src="/rectangle-41.svg"
        />
        <img
          className={styles.creditDebitCompInner}
          alt=""
          src="/rectangle-42.svg"
        />
        <div className={styles.component151}>
          <img
            className={styles.iconIonicIosCard}
            alt=""
            src="/icon-ionicioscard.svg"
          />
          <div className={styles.outstanding}>Outstanding</div>
          <img
            className={styles.iconAwesomeClock}
            alt=""
            src="/icon-awesomeclock.svg"
          />
        </div>
        <img className={styles.lineIcon} alt="" src="/line-12.svg" />
        <img
          className={styles.creditDebitCompChild1}
          alt=""
          src="/line-13.svg"
        />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-49.svg" />
        <img
          className={styles.creditDebitCompChild2}
          alt=""
          src="/rectangle-43.svg"
        />
        <img
          className={styles.creditDebitCompChild3}
          alt=""
          src="/rectangle-44.svg"
        />
        <img
          className={styles.creditDebitCompChild4}
          alt=""
          src="/rectangle-45.svg"
        />
        <img
          className={styles.creditDebitCompChild5}
          alt=""
          src="/rectangle-46.svg"
        />
        <img
          className={styles.creditDebitCompChild6}
          alt=""
          src="/rectangle-47.svg"
        />
        <img
          className={styles.creditDebitCompChild7}
          alt=""
          src="/rectangle-48.svg"
        />
        <img
          className={styles.iconFeatherClock}
          alt=""
          src="/icon-featherclock.svg"
        />
        <div className={styles.d}>D</div>
        <div className={styles.w}>W</div>
        <div className={styles.m}>M</div>
        <div className={styles.y}>Y</div>
        <div className={styles.customTime}>Custom Time</div>
        <img
          className={styles.creditDebitCompChild8}
          alt=""
          src="/line-15.svg"
        />
        <img
          className={styles.creditDebitCompChild9}
          alt=""
          src="/line-22.svg"
        />
        <img
          className={styles.creditDebitCompChild10}
          alt=""
          src="/line-26.svg"
        />
        <img
          className={styles.creditDebitCompChild11}
          alt=""
          src="/line-18.svg"
        />
        <img
          className={styles.creditDebitCompChild12}
          alt=""
          src="/line-20.svg"
        />
        <img
          className={styles.creditDebitCompChild13}
          alt=""
          src="/line-16.svg"
        />
        <img
          className={styles.creditDebitCompChild14}
          alt=""
          src="/line-21.svg"
        />
        <img
          className={styles.creditDebitCompChild15}
          alt=""
          src="/line-25.svg"
        />
        <img
          className={styles.creditDebitCompChild16}
          alt=""
          src="/line-17.svg"
        />
        <img
          className={styles.creditDebitCompChild17}
          alt=""
          src="/line-19.svg"
        />
        <div className={styles.vectorContainer}>
          <img className={styles.groupItem} alt="" src="/line-27.svg" />
          <div className={styles.jul}>22 Jul</div>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupInner} alt="" src="/line-28.svg" />
          <div className={styles.jul}>23 Jul</div>
        </div>
        <div className={styles.vectorParent1}>
          <img className={styles.groupChild1} alt="" src="/line-31.svg" />
          <div className={styles.jul}>25 Jul</div>
        </div>
        <div className={styles.vectorParent2}>
          <img className={styles.groupChild2} alt="" src="/line-27.svg" />
          <div className={styles.jul}>28 Jul</div>
        </div>
        <div className={styles.vectorParent3}>
          <img className={styles.groupInner} alt="" src="/line-28.svg" />
          <div className={styles.jul}>30 Jul</div>
        </div>
        <div className={styles.vectorParent4}>
          <img className={styles.groupChild4} alt="" src="/line-29.svg" />
          <div className={styles.jul}>24 Jul</div>
        </div>
        <div className={styles.vectorParent5}>
          <img className={styles.groupChild5} alt="" src="/line-28.svg" />
          <div className={styles.jul}>27 Jul</div>
        </div>
        <div className={styles.vectorParent6}>
          <img className={styles.groupInner} alt="" src="/line-28.svg" />
          <div className={styles.jul}>26 Jul</div>
        </div>
        <div className={styles.vectorParent7}>
          <img className={styles.groupChild7} alt="" src="/line-32.svg" />
          <div className={styles.jul}>29 Jul</div>
        </div>
        <div className={styles.vectorParent8}>
          <img className={styles.groupChild8} alt="" src="/line-31.svg" />
          <div className={styles.jul}>31 Jul</div>
        </div>
        <img className={styles.path11Icon} alt="" src="/path-111.svg" />
        <img className={styles.path10Icon} alt="" src="/path-10.svg" />
        <div className={styles.l}>Rs 90 L</div>
        <div className={styles.l1}>Rs 80 L</div>
        <div className={styles.l2}>Rs 70 L</div>
        <div className={styles.l3}>Rs 60 L</div>
        <div className={styles.l4}>Rs 50 L</div>
        <div className={styles.l5}>Rs 40 L</div>
        <div className={styles.l6}>Rs 30 L</div>
        <div className={styles.l7}>Rs 20 L</div>
        <div className={styles.l8}>Rs 10 L</div>
        <div className={styles.component131}>
          <div className={styles.groupParent}>
            <div className={styles.iconIonicIosCardParent}>
              <img
                className={styles.iconIonicIosCard1}
                alt=""
                src="/icon-ionicioscard1.svg"
              />
              <div className={styles.credit2}>Transcations</div>
            </div>
            <img
              className={styles.iconAwesomeChevronDown}
              alt=""
              src="/icon-awesomechevrondown.svg"
            />
          </div>
          <img
            className={styles.iconFeatherExternalLink}
            alt=""
            src="/icon-featherexternallink.svg"
          />
        </div>
        <div className={styles.component141}>
          <div className={styles.groupContainer}>
            <div className={styles.iconIonicIosCardGroup}>
              <img
                className={styles.iconIonicIosCard2}
                alt=""
                src="/icon-ionicioscard2.svg"
              />
              <div className={styles.debit2}>Debit</div>
            </div>
            <img
              className={styles.iconAwesomeChevronDown1}
              alt=""
              src="/icon-awesomechevrondown1.svg"
            />
          </div>
          <img
            className={styles.iconFeatherExternalLink1}
            alt=""
            src="/icon-featherexternallink1.svg"
          />
        </div>
        <img
          className={styles.iconFeatherExternalLink2}
          alt=""
          src="/icon-featherexternallink2.svg"
        />
        <div className={styles.component161}>
          <div className={styles.downloadChart}>Download Chart</div>
          <img
            className={styles.iconFeatherDownloadCloud}
            alt=""
            src="/icon-featherdownloadcloud.svg"
          />
        </div>
        <img
          className={styles.creditDebitCompChild18}
          alt=""
          src="/line-14.svg"
        />
      </div>
      <img
        className={styles.iconFeatherExternalLink3}
        alt=""
        src="/icon-featherexternallink3.svg"
      />
      <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
      <div className={styles.collectionReport}>Collection Report</div>
      <div className={styles.totalExpectedAmount}>Total Collected Amount</div>
      <div className={styles.growthPerformance}>Growth Performance</div>
      <div className={styles.div2}>Rs 5,20,000</div>
      <div className={styles.div3}>+ 8.9%</div>
      <div className={styles.changeInRevenue}>Change in revenue</div>
      <img className={styles.paymentsReportsChild2} alt="" src="/line-37.svg" />
      <img className={styles.paymentsReportsChild3} alt="" src="/line-38.svg" />
      <div className={styles.exportDataParent}>
        <div className={styles.exportData}>Export Data</div>
        <img
          className={styles.icoutlineFileUploadIcon}
          alt=""
          src="/icoutlinefileupload.svg"
        />
      </div>
    </div>
  );
};

export default PaymentsReports;
