import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import InstructorsManageTests from "./pages/InstructorsManageTests";
import InstructorsYourPayments from "./pages/InstructorsYourPayments";
import InstructorsUploadTests from "./pages/InstructorsUploadTests";
import InstructorsProfile from "./pages/InstructorsProfile";
import ViewProgress from "./pages/ViewProgress";
import TestTakerProfile from "./pages/TestTakerProfile";
import Payments from "./pages/Payments";
import ViewProgress1 from "./pages/ViewProgress1";
import TakeTests from "./pages/TakeTests";
import TestsPurchased from "./pages/TestsPurchased";
import TestTakerDashboard from "./pages/TestTakerDashboard";
import InstructorsDashboard from "./pages/InstructorsDashboard";
import TestEnvironmentManage from "./pages/TestEnvironmentManage";
import PaymentsDebit from "./pages/PaymentsDebit";
import PaymentsCredit from "./pages/PaymentsCredit";
import PaymentsReports from "./pages/PaymentsReports";
import InstructorRemove1 from "./pages/InstructorRemove1";
import InstructorViewDetails2 from "./pages/InstructorViewDetails2";
import InstructorRemove2 from "./pages/InstructorRemove2";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import PasswordReset1 from "./pages/PasswordReset1";
import ResetPassword2 from "./pages/ResetPassword2";
import ResetPassword1 from "./pages/ResetPassword1";
import ForgetPassword1 from "./pages/ForgetPassword1";
import InstructorViewDetails1 from "./pages/InstructorViewDetails1";
import TestTakersRemove2 from "./pages/TestTakersRemove2";
import TestTakersRemove1 from "./pages/TestTakersRemove1";
import TestTakersViewDetails1 from "./pages/TestTakersViewDetails1";
import InstructorAdd2 from "./pages/InstructorAdd2";
import TestTakersAdd2 from "./pages/TestTakersAdd2";
import InstructorAdd1 from "./pages/InstructorAdd1";
import TestTakersAdd1 from "./pages/TestTakersAdd1";
import InstructorsManage from "./pages/InstructorsManage";
import TestTakersManage from "./pages/TestTakersManage";
import InstructorSignUp from "./pages/InstructorSignUp";
import InstructorLogin from "./pages/InstructorLogin";
import TestTakerSignUp from "./pages/TestTakerSignUp";
import TestTakerLogin from "./pages/TestTakerLogin";
import AdminDashBoard from "./pages/AdminDashBoard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-manage-tests":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-your-payments":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-upload-tests":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-profile":
        title = "";
        metaDescription = "";
        break;
      case "/view-progress1":
        title = "";
        metaDescription = "";
        break;
      case "/testtaker-profile":
        title = "";
        metaDescription = "";
        break;
      case "/payments":
        title = "";
        metaDescription = "";
        break;
      case "/view-progress":
        title = "";
        metaDescription = "";
        break;
      case "/take-tests":
        title = "";
        metaDescription = "";
        break;
      case "/tests-purchased":
        title = "";
        metaDescription = "";
        break;
      case "/testtaker-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/test-environment-manage":
        title = "";
        metaDescription = "";
        break;
      case "/payments-debit":
        title = "";
        metaDescription = "";
        break;
      case "/payments-credit":
        title = "";
        metaDescription = "";
        break;
      case "/payments-reports":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-remove1":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-view-details2":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-remove2":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;   
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/password-reset-1":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-2":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-1":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password-1":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-view-details1":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-remove2":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-remove1":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-view-details1":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-add2":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-add2":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-add1":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-add1":
        title = "";
        metaDescription = "";
        break;
      case "/instructors-manage":
        title = "";
        metaDescription = "";
        break;
      case "/testtakers-manage":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-login":
        title = "";
        metaDescription = "";
        break;
      case "/testtaker-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/testtaker-login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/instructors-manage-tests"
        element={<InstructorsManageTests />}
      />
      <Route
        path="/instructors-your-payments"
        element={<InstructorsYourPayments />}
      />
      <Route
        path="/instructors-upload-tests"
        element={<InstructorsUploadTests />}
      />
      <Route path="/instructors-profile" element={<InstructorsProfile />} />
      <Route path="/view-progress1" element={<ViewProgress />} />
      <Route path="/testtaker-profile" element={<TestTakerProfile />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/view-progress" element={<ViewProgress1 />} />
      <Route path="/take-tests" element={<TakeTests />} />
      <Route path="/tests-purchased" element={<TestsPurchased />} />
      <Route path="/testtaker-dashboard" element={<TestTakerDashboard />} />
      <Route path="/instructors-dashboard" element={<InstructorsDashboard />} />
      <Route
        path="/test-environment-manage"
        element={<TestEnvironmentManage />}
      />
      <Route path="/payments-debit" element={<PaymentsDebit />} />
      <Route path="/payments-credit" element={<PaymentsCredit />} />
      <Route path="/payments-reports" element={<PaymentsReports />} />
      <Route path="/instructor-remove1" element={<InstructorRemove1 />} />
      <Route
        path="/instructor-view-details2"
        element={<InstructorViewDetails2 />}
      />
      <Route path="/instructor-remove2" element={<InstructorRemove2 />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashBoard />} />
      <Route path="/password-reset-1" element={<PasswordReset1 />} />
      <Route path="/reset-password-2" element={<ResetPassword2 />} />
      <Route path="/reset-password-1" element={<ResetPassword1 />} />
      <Route path="/forget-password-1" element={<ForgetPassword1 />} />
      <Route
        path="/instructor-view-details1"
        element={<InstructorViewDetails1 />}
      />
      <Route path="/testtakers-remove2" element={<TestTakersRemove2 />} />
      <Route path="/testtakers-remove1" element={<TestTakersRemove1 />} />
      <Route
        path="/testtakers-view-details1"
        element={<TestTakersViewDetails1 />}
      />
      <Route path="/instructor-add2" element={<InstructorAdd2 />} />
      <Route path="/testtakers-add2" element={<TestTakersAdd2 />} />
      <Route path="/instructor-add1" element={<InstructorAdd1 />} />
      <Route path="/testtakers-add1" element={<TestTakersAdd1 />} />
      <Route path="/instructors-manage" element={<InstructorsManage />} />
      <Route path="/testtakers-manage" element={<TestTakersManage />} />
      <Route path="/instructor-sign-up" element={<InstructorSignUp />} />
      <Route path="/instructor-login" element={<InstructorLogin />} />
      <Route path="/testtaker-sign-up" element={<TestTakerSignUp />} />
      <Route path="/testtaker-login" element={<TestTakerLogin />} />
    </Routes>
  );
}
export default App;
