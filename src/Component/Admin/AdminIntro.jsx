import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./../tailwindcss.css"
import Adminpic from "../../assets/edusity_assets/Admin.png"
import "./Admin.css"
const AdminIntro = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    // Fade + slide the whole card
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Animate heading text
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "back.out(1.7)" }
    );

    // Subtext stagger
    gsap.fromTo(
      subTextRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div
        ref={containerRef}
        className="text-center space-y-4 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
      >
      <img src={Adminpic} style={{ height:"50px" , width:"auto"}}/>
        <h1 ref={headingRef} className="text-4xl font-extrabold tracking-wide">
           Welcome, <span className="text-indigo-400">Master David</span>!
        </h1>

        <div ref={subTextRef}>
          <p className="text-gray-400 text-lg">
            You’ve entered the{" "}
            <span className="font-semibold text-indigo-300">Admin Dashboard</span>.
          </p>
          <p className="text-sm text-gray-500">
            Manage users, monitor activity, and control the kingdom 🛡️
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminIntro;
