import NavBar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import the Router component

import SipCalculator from "./Pages/SipCalculator";
import NIfty50 from "./Pages/NIfty50";
import WealthManager from "./Pages/WealthManager";
import MutualFund from "./Pages/MutualFund";
import MainPage from "./Pages/MainPage";
function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sip-calculator" element={<SipCalculator />} />
          <Route path="/nifty" element={<NIfty50 />} />
          <Route path="/wealth-manager" element={<WealthManager />} />
          <Route path="/mutual-fund" element={<MutualFund />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
