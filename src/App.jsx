import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import PrivateRoute from "././Component/ProtectedRoute.jsx";
import Admin from "./Component/Admin/Admin.jsx";
import HomePage from "./Component/Home page/HomePage.jsx";
import ContactPage from "./Component/contact page/ContactPage.jsx";
import Quiz from "./Component/Quiz page/Quiz.jsx";
import Team from "./Component/Team/Team.jsx";
import AboutUs from "./Component/About page/AboutUs.jsx";
import CgpaCalc from "./Component/CGPA/CgpaCalc.jsx";
import CodingDictionary from "./Component/Code dictionary/CodingDict.jsx";
import SlidingDisplay from "./Component/slides/SlidingDisplay.jsx";
import FeaturesPage from "./Component/Features/FeaturesPage.jsx";
import DownloadContent from "./Component/DownloadContent/DownloadContent.jsx";
import LoginPage from "./Component/Login.jsx";
import "./Component/tailwindcss.css";
import "./index.css";
import SignUpPage from "./Component/SignUp.jsx";
function App() {

    const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={logout}  />
          <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
          <Route
            path="/download"
            element={
              <PrivateRoute>
                <DownloadContent />
              </PrivateRoute>
            }
          />

          <Route path="/contact" element={<PrivateRoute> <ContactPage /></PrivateRoute> } />
          <Route path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
          <Route path="/cgpa" element={<PrivateRoute><CgpaCalc /></PrivateRoute>} />
          <Route path="/dictionary" element={<PrivateRoute><CodingDictionary /></PrivateRoute>} />
          <Route path="/slides" element={<PrivateRoute><SlidingDisplay /></PrivateRoute>} />
          <Route path="/features" element={<PrivateRoute><FeaturesPage /></PrivateRoute>} />

          <Route
            path="*"
            element={
              <div className="contain-unknownText">
                <h1 className="page-unknown">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
