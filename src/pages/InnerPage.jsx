import React, { useState } from "react";
import "./InnerPage.css"; // Include your custom CSS for styling

const Chatbot = () => {
  const [activeIcon, setActiveIcon] = useState("icon1");
  const [showSelect, setShowSelect] = useState(false);

  // Content for each icon
  const iconContent = {
    icon1: "Content for Icon 1",
    icon2: "Content for Icon 2",
    icon3: "Content for Icon 3",
    icon4: "Content for Icon 4",
    icon5: "Content for Icon 5",
    icon6: "Content for Icon 6",
    icon7: "Content for Icon 7",
  };
  const handleClick = () => {
    setActiveIcon("icon6");
    setShowSelect(!showSelect); // Toggle the visibility of the select dropdown
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-1 h-100vh sidebar">
          {/* Top Icons */}
          <div className="d-flex flex-column gap-3 mt-3">
            <button
              className={`btn ${activeIcon === "icon1" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon1")}
            >
              <img
                src="/Images/Logomark1.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
            <button
              className={`btn  ${activeIcon === "icon2" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon2")}
            >
              <img
                src="/Images/Logomark2.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
            <button
              className={`btn  ${activeIcon === "icon3" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon3")}
            >
              <img
                src="/Images/Logomark3.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
            <button
              className={`btn ${activeIcon === "icon4" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon4")}
            >
              <img
                src="/Images/Logomark4.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
          </div>

          {/* Bottom Icons */}
          <div className="d-flex flex-column gap-3 mt-auto mb-3">
            <button
              className={`btn ${activeIcon === "icon5" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon5")}
            >
              <img
                src="/Images/Logomark5.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
            <button
              className={`btn ${activeIcon === "icon6" ? "active" : ""}`}
              onClick={handleClick}
            >
              <img
                src="/Images/Logomark6.png"
                alt="Logo"
                className="icon-image"
              />
              {showSelect && (
                <select>
                  <option value="option1">Help</option>
                  <option value="option2">Policy</option>
                  <option value="option3">Logout</option>
                </select>
              )}
            </button>
            <button
              className={`btn ${activeIcon === "icon7" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon7")}
            >
              <img src="/Images/Avatar.png" alt="Logo" className="icon-image" />
            </button>
          </div>
        </div>

        {/* Main Content Column */}
        <div className="col-md-11 h-100vh">
          <div className="content-area text-center">
            <h3>{iconContent[activeIcon]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
