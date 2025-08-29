import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Component/Home page/HomePage.jsx";
import ContactPage from "./Component/contact page/ContactPage.jsx";
import Quiz from "./Component/Quiz page/Quiz.jsx";
import Team from "./Component/Team/Team.jsx";
import AboutUs from "./Component/About page/AboutUs.jsx";
import CgpaCalc from "./Component/CGPA/CgpaCalc.jsx";
import CodingDictionary from "./Component/Code dictionary/CodingDict.jsx";
import SlidingDisplay from "./Component/slides/SlidingDisplay.jsx";
import SignInPage from "./Component/SignIn/SignInPage.jsx";
import "./Component/tailwindcss.css"
import "./index.css"
const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
            return <div className="loading-container">
                      <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                        <div className="double-bounce3"></div>
                      </div>
                   </div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
function App() {

   const { isSignedIn , isLoaded} = useUser();

  return (
    <Router>
      <div   className={
    (!isSignedIn && isLoaded)
      ? "fixed top-4 z-50 flex items-center justify-center h-9 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 right-9 lg:right-0"
      : "fixed top-6 z-50 right-18 lg:right-18 lg:top-4.5 "
  }>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton style={{ backgroundColor:"Transparent" , color:"#fff" , border:"none"}} mode="modal" />
        </SignedOut>
      </div>

      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="*" element={
                                    <div className="contain-unknownText">
                                      <h1 className="page-unknown">404 - Page Not Found</h1>
                                    </div>} />
        <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cgpa" element={<ProtectedRoute><CgpaCalc /></ProtectedRoute>} />
        <Route path="/dictionary" element={<ProtectedRoute><CodingDictionary /></ProtectedRoute>} />
        <Route path="/slides" element={<ProtectedRoute><SlidingDisplay /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;