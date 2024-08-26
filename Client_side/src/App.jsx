import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HospitalSignin from "./pages/HospitalSignin";
import HosSignup from "./pages/HosSignup";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hospital-signup" element={<HosSignup/>} />
          <Route path="/hospital-signin" element={<HospitalSignin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
