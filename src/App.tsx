// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StepsToRegister from "./pages/StepsToRegister";
import Register from "./pages/Register";
import HackathonTemplate from "./pages/HackathonTemplate";
import TermsAndConditions from "./pages/TermsAndConditions";
import Documents from "./pages/Documents";
import ReferralDashboard from "./pages/ReferralDashboard";
import { useEffect } from "react";
import PaymentTermsAndConditions from "./pages/PaymentTermsAndConditions";
import ReferralTermsAndConditions from "./pages/ReferralTermsAndConditions";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-WJD3LKTKTF";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: "/landingpage",
      title: "Landing Page",
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referral" element={<ReferralDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/steps" element={<StepsToRegister />} />
        <Route path="/hackathontemplate" element={<HackathonTemplate />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route
          path="/payment_terms_and_conditions"
          element={<PaymentTermsAndConditions />}
        />
        <Route
          path="/referral_terms_and_conditions"
          element={<ReferralTermsAndConditions />}
        />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
};

export default App;
