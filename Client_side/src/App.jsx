import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HospitalSignUP from "./pages/HospitalSignUP";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hospital-signup" element={<HospitalSignUP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
