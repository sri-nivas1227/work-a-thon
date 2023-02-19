import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Tasks from "../components/TodayTask/Tasks";
import { Users } from "../dummytask";
import { Team } from "../dummytask";
import Teamcard from "../components/teamcard/Teamcard";
const Home = () => {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <>
    {/* <header>
      <nav className="main-nav">
        <a  className="logo">
          officeLaunge
        </a>
      </nav>
    </header> */}

      <div className="sub-nav">
        
        <nav className="user-nav">
             <div className="user-nav-name">
                <li>
                <a >Hey Team-mate!</a>
                </li>
              </div>
          <ul>

            <li>
              <a >
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li>
              <a >
                <img src="./images/5.jpg" alt="Your Profile" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="task-list">
          <div className="task-tabs">
            <button
              className={`tab ${activeTab === "today" ? "active" : ""}`}
              onClick={() => setActiveTab("today")}
            >
              Your Today Tasks
            </button>
            <button
              className={`tab ${activeTab === "team" ? "active" : ""}`}
              onClick={() => setActiveTab("team")}
            >
              Team Tasks
            </button>
          </div>
          <div className="task-content">
            {activeTab === "today" ? (
              <Tasks tasks={Users} />
            ) : (
              <Tasks tasks={Team} />
            )}
          </div>
        </div>
        {/* team member */}

        <div className="team-members">
          <span>Team Members</span>

          <Teamcard></Teamcard>
        </div>
        <div className="team">
          <span>Team</span>
          <div class="team-card">
            <img class="team-profile-pic" src="./images/5.jpg"></img>
            <div class="team-name">Visinories</div>
            <div class="company-name">Work-a-thon</div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;
