import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./tailwindcss.css";
import leaf from "../assets/edusity_assets/leafpic.png";
import "./../index.css";

const API_URL = import.meta.env.VITE_BASE_URL;

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false); 

  const cardRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0, scale: 0.9, filter: "blur(10px)" },
      { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      formRef.current.querySelectorAll("input, button"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, delay: 0.6, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, [theme]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });
      login(res.data.access_token, { username });
      setMessage("Login successful!");
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.msg || "Login failed.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        theme === "light"
          ? "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      }`}
    >
            <div className="disappear" style={{ position: "absolute", top: "20px", left: "20px", fontSize: "24px", fontWeight: "bold", color: theme === "light" ? "#1f2937" : "#f3f4f6" }}>
                 <h1>Welcome to BULC <img src={leaf} style={{position:"absolute", top:"-15px", right:"-55px", height:"70px" , width:"auto"}}/></h1>
            </div>
            <span className="disappear" style={{ position: "absolute", top: "60px", left: "20px",
             fontSize: "18px", color: theme === "light" ? "#1f2937" : "#f3f4f6" }}>
            We reach for greatness and we succeed together</span>
            <span className="disappear" style={{ position: "absolute", top: "120px", left: "20px",
             fontSize: "14px", color: theme === "light" ? "#1f2937" : "#f3f4f6" }}>
           MOTTO: WE RISE AS ONE BUT CODE AS MANY🚀</span>
      <div
        ref={cardRef}
        className={`p-20 h-100 rounded-2xl shadow-2xl w-full max-w-md transition-colors duration-500 ${
          theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"
        }`}
      >
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4" style={{ marginTop: "20px", padding: "15px" }}>
          <button
            style={{ padding: "10px" }}
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
            className="px-3 py-1 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:text-white"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form ref={formRef} onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-20 w-full" style={{ marginBottom: "20px", marginTop: "40px" }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Username
            </label>
            <input
              type="text"
              placeholder=" Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 transition ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400 bg-white text-gray-900"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Password
            </label>
            <input
              type="password"
              placeholder=" Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 transition ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400 bg-white text-gray-900"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          {/* Login Button with Loader */}
          <button
            type="submit"
            style={{ width: "200px", marginLeft: "25%", marginTop: "40px" }}
            className={`w-full py-3 rounded-xl shadow-lg font-semibold text-lg flex items-center justify-center transition transform hover:scale-[1.02] active:scale-[0.98] ${
              theme === "light"
                ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            }`}
            disabled={loading} // disable button while loading
          >
            {loading ? (
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}

        <p style={{ fontSize: "14px", marginTop: "20px", textAlign: "center" }}>
          If you do not have an account,{" "}
          <Link
            to="/signup"
            style={{ textDecoration: "underline" }}
            className="text-blue-600 dark:text-purple-400 hover:underline font-medium ml-1"
          >
            please sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
