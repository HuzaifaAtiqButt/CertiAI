import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentsCredit.module.css";

const PaymentsCredit = () => {
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

  const onDebitContainerClick = useCallback(() => {
    navigate("/payments-debit");
  }, [navigate]);

  return (
    <div className={styles.paymentsCredit}>
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
        className={styles.paymentsCreditChild}
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
      <div className={styles.paymentsCreditItem} />
      <div className={styles.reports} onClick={onReportsTextClick}>
        Reports
      </div>
      <div className={styles.debit} onClick={onDebitContainerClick}>
        <div className={styles.debit1}>Debit</div>
      </div>
      <div className={styles.paymentsCreditInner} />
      <div className={styles.from}>From</div>
      <div className={styles.to}>to</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.paymentsCreditChild1} />
      <div className={styles.div}>12-01-2023</div>
      <div className={styles.div1}>12-01-2023</div>
      <img className={styles.uiscalenderIcon} alt="" src="/uiscalender.svg" />
      <img className={styles.uiscalenderIcon1} alt="" src="/uiscalender.svg" />
      <div className={styles.transactions}>
        <div className={styles.debit1}>Credit</div>
      </div>
      <div className={styles.dateTime}>{`Date & Time`}</div>
      <div className={styles.sno}>S.No.</div>
      <div className={styles.name}>Name</div>
      <div className={styles.transactionId}>Transaction ID</div>
      <div className={styles.amount}>Amount</div>
      <div className={styles.phoneNumber}>Phone Number</div>
      <div className={styles.paymentMethod}>Payment Method</div>
      <div className={styles.status}>Status</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div8}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>IMPS</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupItem} />
          <div className={styles.april2023}>03 April2023</div>
          <div className={styles.div2}>1</div>
          <div className={styles.arjunSinghShekhawat}>
            Arjun singh Shekhawat
          </div>
          <div className={styles.div3}>1491255800</div>
          <div className={styles.div4}>₹ 80,000</div>
          <div className={styles.div5}>+919024974391</div>
          <div className={styles.upi}>UPI</div>
          <div className={styles.success}>Success</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsCredit;
