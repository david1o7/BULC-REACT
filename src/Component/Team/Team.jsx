import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Team.css'
import user_1 from "../../assets/edusity_assets/David1.jpg"
import user_2 from "../../assets/edusity_assets/noel1.jpg"
import user_3 from "../../assets/edusity_assets/StockImage.jpg"
import user_4 from "../../assets/edusity_assets/StockImage2.jpg"

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "IRHENE DAVID .O.",
      role: "Team Lead / Founder",
      bio: "Passionate about creating user-friendly applications...",
      image: user_1
    },
    {
      id: 2,
      name: "Noel Asuru .s.",
      role: "Backend Developer / Founder",
      bio: "Specialized in React and modern JavaScript. Loves creating beautiful, responsive user interfaces and optimizing user experience.",
      image: user_2
    },
    {
      id: 3,
      name: "THE REVENANT ",
      role: "Frontend Developer",
      bio: "Focuses on building scalable software solutions and developments.",
      image: user_3
    },
    {
      id: 4,
      name: "KOBI ",
      role: "FRONTEND Developer",
      bio: "Alias Adonis ... Creative designer with a keen eye for detail. Specializes in user-centered design and creating intuitive user experiences.",
      image:user_4
    }
  ];

  return (
    <>
      <Navbar/>
      <div className="team-container">
        <div className="team-header">
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">Meet the talented individuals behind our success</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team
