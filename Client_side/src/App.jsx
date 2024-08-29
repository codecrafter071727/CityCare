import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HospitalSignin from "./pages/HospitalSignin";
import HosSignup from "./pages/HosSignup";
import HospitalDashboard from "./pages/HospitalDashboard";
import PatientSignup from "./pages/PatientSignup";
import PatientSignin from "./pages/PatientSignin";
import HospitalList from "./pages/HospitalList";
import DoctorList from "./pages/DoctorList";
import Dispensation from "./pages/Dispensation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hospital-signup" element={<HosSignup />} />
          <Route path="/hospital-signin" element={<HospitalSignin />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/patient-signin" element={<PatientSignin />} />
          <Route path="/patient-signup" element={<PatientSignup />} />
          <Route path="/hospital-list" element={<HospitalList />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/dispensation" element={<Dispensation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
