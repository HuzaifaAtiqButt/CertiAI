import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentsDebit.module.css";

const PaymentsDebit = () => {
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

  const onReportsTextClick = useCallback(() => {
    navigate("/payments-reports");
  }, [navigate]);

  const onTransactionsContainerClick = useCallback(() => {
    navigate("/payments-credit");
  }, [navigate]);

  return (
    <div className={styles.paymentsDebit}>
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
        className={styles.paymentsDebitChild}
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
      <div className={styles.paymentsDebitItem} />
      <div className={styles.reports} onClick={onReportsTextClick}>
        Reports
      </div>
      <div className={styles.debit}>
        <div className={styles.debit1}>Debit</div>
      </div>
      <img className={styles.paymentsDebitInner} alt="" src="/line-130.svg" />
      <div className={styles.from}>From</div>
      <div className={styles.to}>to</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.paymentsDebitChild1} />
      <div className={styles.div}>12-01-2023</div>
      <div className={styles.div1}>12-01-2023</div>
      <img className={styles.uiscalenderIcon} alt="" src="/uiscalender.svg" />
      <img className={styles.uiscalenderIcon1} alt="" src="/uiscalender.svg" />
      <div
        className={styles.transactions}
        onClick={onTransactionsContainerClick}
      >
        <div className={styles.debit1}>Credit</div>
      </div>
      <div className={styles.sno}>S.No</div>
      <div className={styles.name}>Name</div>
      <div className={styles.phoneNo}>Phone No.</div>
      <div className={styles.amount}>Amount</div>
      <div className={styles.status}>Status</div>
      <div className={styles.date}>Date</div>
      <div className={styles.staffParent}>
        <div className={styles.staff}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff1}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff2}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff3}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff4}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff5}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff6}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
        </div>
        <div className={styles.staff7}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
          <div className={styles.viewLeaveDetails}>
            <div className={styles.viewLeaveDetailsChild} />
            <img
              className={styles.solareyeLinearIcon}
              alt=""
              src="/solareyelinear.svg"
            />
            <div className={styles.viewDetails}>View Details</div>
          </div>
        </div>
        <div className={styles.staff8}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
          <div className={styles.viewLeaveDetails}>
            <div className={styles.viewLeaveDetailsChild} />
            <img
              className={styles.solareyeLinearIcon}
              alt=""
              src="/solareyelinear.svg"
            />
            <div className={styles.viewDetails}>View Details</div>
          </div>
        </div>
        <div className={styles.staff9}>
          <div className={styles.staffChild} />
          <div className={styles.div2}>1.</div>
          <div className={styles.harshKadyan}>Harsh Kadyan</div>
          <div className={styles.div3}>{`+919024974391 `}</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.apr2023}>23 Apr 2023</div>
          <div className={styles.viewLeaveDetails}>
            <div className={styles.viewLeaveDetailsChild} />
            <img
              className={styles.solareyeLinearIcon}
              alt=""
              src="/solareyelinear.svg"
            />
            <div className={styles.viewDetails}>View Details</div>
          </div>
        </div>
      </div>
      <div className={styles.transactionId}>Transaction ID</div>
      <div className={styles.div32}>1491255800</div>
      <div className={styles.div33}>1491255800</div>
      <div className={styles.div34}>1491255800</div>
      <div className={styles.div35}>1491255800</div>
      <div className={styles.div36}>1491255800</div>
      <div className={styles.div37}>1491255800</div>
      <div className={styles.div38}>1491255800</div>
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

export default PaymentsDebit;
