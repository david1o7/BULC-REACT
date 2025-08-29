import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import "./SignInPage.css";
import leaf from "../../assets/edusity_assets/leafpic.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
<>
      <div className="Scontainer">
      <div className="Scontent">
        <h1>
        <span style={{marginLeft:"0"}}>BULC</span>
        <img src={leaf} alt="Leaf" className="leaf-image" />
        <br/>
        <br />
          Welcome to BULC 👋
        </h1>
        <p style={{ marginBottom:"18px"}}> We reach for greatness together</p>
        <p >
          Sign in to continue to your dashboard
        </p>

        <SignInButton mode="modal">
        <Link to="/">
          <button className="btn-signin">
            Sign In
          </button>
          </Link>
        </SignInButton>
      </div>
    </div>
</>
  );
};

export default SignInPage;
