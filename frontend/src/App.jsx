import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";

import IntroductionPage from "./pages/IntroductionPage";
import LomitosPage from "./pages/LomitosPage";
import QueryPage from "./pages/QueryPage";
import AuthPage from "./pages/AuthPage";
import PostmanPage from "./pages/PostmanPage";

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
          <main className="w-1/2 flex flex-col">
            <Routes>
              <Route path="/" element={<IntroductionPage />} />
              <Route path="/lomitos" element={<LomitosPage />} />
              <Route path="/querys" element={<QueryPage />} />
              <Route path="/authentication" element={<AuthPage />} />
              <Route path="/postman" element={<PostmanPage />} />
            </Routes>
          </main>
          <div className="w-1/4 relative">
            <SideBarRight />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
