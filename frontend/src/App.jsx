import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";

import IntroductionPage from "./pages/IntroductionPage";
import LomitosPage from "./pages/LomitosPage";

function App() {
  return (
    <div className="mx-16 my-8">
      <Router>
        <div className="relative">
          <Header />
        </div>
        <div className="flex mt-28">
          <div className="w-1/4">
            <SideBarLeft />
          </div>
          <div className="w-1/2">
            <Routes>
              <Route path="/" element={<IntroductionPage />} />
              <Route path="/lomitos" element={<LomitosPage />} />
            </Routes>
          </div>
          <div className="w-1/4 relative">
            <SideBarRight />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
