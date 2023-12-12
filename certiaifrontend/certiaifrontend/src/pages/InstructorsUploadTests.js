import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InstructorsUploadTests.module.css";

const InstructorsUploadTests = () => {
  const navigate = useNavigate();

  const onUploadTestsContainerClick = useCallback(() => {
    navigate("/instructors-upload-tests");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/instructors-dashboard");
  }, [navigate]);

  const onAcademicsTextClick = useCallback(() => {
    navigate("/instructors-manage-tests");
  }, [navigate]);

  const onInstructorProfileTextClick = useCallback(() => {
    navigate("/instructors-profile");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onYourPaymentsTextClick = useCallback(() => {
    navigate("/instructors-your-payments");
  }, [navigate]);

  return (
    <div className={styles.instructorsUploadTests}>
      <div className={styles.dragNDrop}>
        <div className={styles.dragNDropChild} />
        <img className={styles.dragNDropItem} alt="" src="/group-1.svg" />
        <div className={styles.dragAndDrop}>Drag and drop files to upload</div>
        <div className={styles.or}>OR</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.browse}>Browse</div>
        </div>
      </div>
      <div className={styles.div}>
        <div className={styles.child} />
        <div className={styles.ocjatxt}>OCJA.txt</div>
        <div className={styles.mb}>10 MB</div>
        <div className={styles.div1}>100%</div>
        <div className={styles.item} />
        <div className={styles.inner} />
        <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      </div>
      <div className={styles.div2}>
        <div className={styles.child} />
        <div className={styles.ocpxlxs}>OCP.xlxs</div>
        <div className={styles.mb1}>2 MB</div>
        <div className={styles.div3}>65%</div>
        <div className={styles.item} />
        <div className={styles.child2} />
        <img className={styles.child3} alt="" src="/group-4.svg" />
      </div>
      <img
        className={styles.componentlottiehttpsassetIcon}
        alt=""
        src="/componentlottiehttpsassets8lottiefilescompackageslf20-komemhfljson@2x.png"
      />
      <div className={styles.instructorsUploadTestsChild} />
      <div className={styles.instructorsUploadTestsItem} />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img
        className={styles.iconFeatherSearch}
        alt=""
        src="/icon-feathersearch.svg"
      />
      <div className={styles.searchDashboard}>Search Dashboard</div>
      <img className={styles.groupIcon1} alt="" src="/group2.svg" />
      <img
        className={styles.instructorsUploadTestsInner}
        alt=""
        src="/group-13342.svg"
      />
      <img
        className={styles.instructorsUploadTestsChild1}
        alt=""
        src="/group-13650.svg"
      />
      <div className={styles.rajAnadkat}>
        <p className={styles.raj}>{`Raj `}</p>
        <p className={styles.raj}>Anadkat</p>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-61@2x.png" />
      <div className={styles.group}>
        <img className={styles.groupItem} alt="" src="/group1.svg" />
        <b className={styles.uploadTest}>Upload Test</b>
      </div>
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
              src="/teachersvgrepocom-11.svg"
            />
          </div>
          <div className={styles.vectorGroup} onClick={onGroupContainer2Click}>
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
            onClick={onRectangleImage1Click}
          />
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.yourPayments} onClick={onYourPaymentsTextClick}>
          Your Payments
        </div>
        <img className={styles.groupIcon2} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default InstructorsUploadTests;
