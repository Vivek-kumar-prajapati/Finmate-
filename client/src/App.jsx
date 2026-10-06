import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Transections from "./pages/Transections";
import Budget from "./pages/Budget";
import Goles from "./pages/Goles";
import Analytics from "./pages/Analytics";
import AiAsistance from "./pages/AiAsistance";
import Setting from "./pages/Setting";
import Features from "./pages/Features";
import About from "./pages/About";
import WhyFindMate from "./pages/WhyFindMate";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute";
import { useContext } from "react";
import loginContext from "./context/LoginContext";
import CommonDashBoard from "./pages/CommonDashBoard";

function App() {
  const { loginFlag } = useContext(loginContext);
  return loginFlag ? (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route element={<ProtectedRoute login={loginFlag} />}>
          <Route path="/transection" element={<Transections />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/goles" element={<Goles />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/aiassistance" element={<AiAsistance />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="/about" element={<About />} />
          <Route path="/whyfindmate" element={<WhyFindMate />} />
          <Route path="/features" element={<Features />} />
        </Route>
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<CommonDashBoard />} />
      <Route path="/about" element={<About />} />
      <Route path="/whyfindmate" element={<WhyFindMate />} />
      <Route path="/features" element={<Features />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
