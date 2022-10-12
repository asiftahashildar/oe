import "./App.css";
import { LoginPage } from "./Component/Login/LoginPage";
import "./common.css";
import { PasswordResetPage } from "./Component/Login/PasswordResetPage";
import { CreateAccountPage } from "./Component/Login/CreateAccountPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Component/Login/LandingPage";
import {UpdateProfileskills} from "./Component/Login/UpdateProfileskills"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/passwordreset" element={<PasswordResetPage />} />
          <Route path="/createaccount" element={<CreateAccountPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/UpdateProfileskills" element={<UpdateProfileskills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
