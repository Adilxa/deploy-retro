import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Aboutpage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import PasswordResetPage from "./pages/PasswordResetPage/PasswordResetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/password" element={<PasswordResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
