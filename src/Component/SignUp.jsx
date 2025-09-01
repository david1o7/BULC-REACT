import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import { useNavigate, Link } from "react-router-dom";
import "./tailwindcss.css";
import leaf from "../assets/edusity_assets/leafpic.png";
import "./../index.css"
const API_URL = import.meta.env.VITE_BASE_URL;

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [email, setEmail] = useState("");
  const [matricNum, setMatricNum] = useState("");
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [classGroup, setClassGroup] = useState("");

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

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onEnter = () => {
      gsap.to(card, {
        y: -5,
        scale: 1.02,
        boxShadow:
          theme === "light"
            ? "0 20px 40px rgba(0,0,0,0.1)"
            : "0 20px 40px rgba(255,255,255,0.1)",
        duration: 0.3,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow:
          theme === "light"
            ? "0 10px 20px rgba(0,0,0,0.05)"
            : "0 10px 20px rgba(255,255,255,0.05)",
        duration: 0.3,
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [theme]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/signup`, {   
        username,
        password,
        email,
        matric_num: matricNum,
        level,
        department,
        class_group: classGroup });
      setMessage(res.data.msg || "Signup successful! You can now log in.");
      // Reset form fields
      setUsername("");
      setPassword("");
      setEmail("");
      setMatricNum("");
      setLevel("");
      setDepartment("");
      setClassGroup("");
      setShowSuccess(true);
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.msg || "Signup failed.Username or Email has been used before");
    } finally {
      setLoading(false);
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
        <span className="disappear"  style={{ position: "absolute", top: "60px", left: "20px",
         fontSize: "18px", color: theme === "light" ? "#1f2937" : "#f3f4f6" }}>
        We reach for greatness <br/> and we succeed together</span>
        <span className="disappear"  style={{ position: "absolute", top: "120px", left: "20px",
         fontSize: "14px", color: theme === "light" ? "#1f2937" : "#f3f4f6" }}>
       MOTTO: WE RISE AS ONE BUT CODE AS MANY🚀</span>
      <div
        ref={cardRef}
        style={{ height: "650px" }}
        className={`p-8 h-100 rounded-2xl shadow-2xl w-full max-w-md transition-colors duration-500 ${
          theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"
        }`}
      >
       
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4" style={{ marginTop: "20px", padding: "15px" }}>
          <button
            style={{ padding: "10px" }}
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
            className="px-3 py-1 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:text-white"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form ref={formRef} onSubmit={handleSignup} className="space-y-5">

          <div style={{ marginBottom: "10px", marginTop: "40px" }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Username
            </label>
            <input
              type="text"
              placeholder=" Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Password
            </label>
            <input
              type="password"
              placeholder=" Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Email <span style={{ color:"red"}}>*required</span>
            </label>
            <input
              type="email"
              placeholder=" Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Matric Number
            </label>
            <input
              type="text"
              placeholder=" Enter your matric number"
              value={matricNum}
              onChange={(e) => setMatricNum(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Class Group
            </label>
            <input
              type="text"
              placeholder=" Enter your class group (e.g., A, B, C)"
              value={classGroup}
              onChange={(e) => setClassGroup(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Level
            </label>
            <input
              type="text"
              placeholder=" Enter your level (e.g., 100, 200)"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <div className="mb-6 w-full" style={{ marginBottom: "10px", }}>
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ marginLeft: "10%" }}>
              Department
            </label>
            <input
              type="text"
              placeholder=" Enter your respective department e.g Computer Science"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              style={{ width: "80%", marginLeft: "10%" }}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "border-gray-300 focus:ring-blue-400"
                  : "bg-gray-800 border-gray-600 focus:ring-purple-400 text-white"
              }`}
              required
            />
          </div>

          <button
            type="submit"
            style={{ width: "200px", marginLeft: "25%", marginTop: "20px" }}
            className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm font-semibold text-lg transition transform hover:scale-[1.02] active:scale-[0.98] ${
              theme === "light"
                ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}

        <p style={{ fontSize: "14px", marginTop: "20px", textAlign: "center" }}>
          If you already have an account,{" "}
          <Link
            to="/login"
            style={{ textDecoration: "underline" }}
            className="text-blue-600 dark:text-purple-400 hover:underline font-medium ml-1"
          >
             go to login page
          </Link>
        </p>
      </div>
    </div>
  );
}
