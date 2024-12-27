import React, { useState } from "react";
import "./InnerPage.css"; // Include your custom CSS for styling
import { Accordion } from "react-bootstrap";

const Chatbot = () => {
  const [activeIcon, setActiveIcon] = useState("icon1");
  const [showSelect, setShowSelect] = useState(false);

  // Content for each icon
  const iconContent = {
    icon1: (
      <div
      className="row"
      style={{
        backgroundColor: "white",
        color: "black",
        height: "100%",
        width: "100%",
      }}
    >
      {/* Sidebar Content */}
      <div className="col-12 text-center text-md-start d-flex flex-column">
        {/* Logo Section */}
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-center position-relative"
          style={{ top: "20px", width: "100%" }}
        >
          <span className="imagelogo text-center mb-3 mb-md-0">
            <img
              src="/Images/Logomark.png"
              alt="Logomark"
              className="img-fluid"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <img
              src="/Images/Wordmark.png"
              alt="Wordmark"
              className="img-fluid"
              style={{ height: "50px", marginLeft: "10px" }}
            />
          </span>
        </div>
      </div>
    
      {/* Title Section */}
      <div className="col-12 text-center text-md-start">
        <h1 className="automation">
          Automation <br />
          Product
        </h1>
      </div>
    </div>
    
    ),
    icon2: (
      <div className="row vh-100">
      {/* Sidebar Section (col-md-3) */}
      <div className="col-md-3 bg-light p-3">
        {/* Search Bar with Lens and Filter */}
        <div className="d-flex align-items-center mb-3">
  {/* Search Bar with Lens Icon in Placeholder */}
  <div className="border d-flex align-items-center rounded px-2" style={{ borderColor: "#d9d9d9" }}>
    <i className="bi bi-search text-muted me-2"></i>
    <input
      type="text"
      className="form-control border-0"
      placeholder="Search..."
      style={{ boxShadow: "none" }}
    />
  </div>

  {/* Filter Icon and Text with Border */}
  <div
    className="border d-flex align-items-center rounded px-2 ms-3"
    style={{ borderColor: "#d9d9d9" ,    height: "37px"}}
  >
    <i className="bi bi-filter text-muted me-2"></i>
    <span>Filter</span>
  </div>
</div>


        {/* Image and Text Section */}
        <div
          className="d-flex align-items-center border-top border-bottom py-2"
          style={{ borderColor: "#d9d9d9" }}
        >
          <img
              src="/Images/nameicon.png"
            alt="placeholder"
            className="me-2"
          />
          <span>Mashreq NeoAI</span>
        </div>

        {/* Chat History Icon */}
        <div className="mt-3">
          <i className="bi bi-chat-left-text"></i> Chat History
        </div>

        {/* Accordions */}
        <Accordion className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span>Accordion Title 1</span>
              <i className="bi bi-three-dots ms-auto"></i>
            </Accordion.Header>
            <Accordion.Body>
              <button className="btn btn-sm btn-danger me-2">Delete</button>
              <button className="btn btn-sm btn-primary">Edit</button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span>Accordion Title 2</span>
              <i className="bi bi-three-dots ms-auto"></i>
            </Accordion.Header>
            <Accordion.Body>
              <button className="btn btn-sm btn-danger me-2">Delete</button>
              <button className="btn btn-sm btn-primary">Edit</button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Bottom Images with Text */}
        <div className="mt-3">
          <div
            className="d-flex border-top border-bottom py-2 mb-2 justify-content-center"
            style={{ borderColor: "#d9d9d9", marginBottom: "10px" }}
          >
            <img
              src="/Images/button.png"
              alt="placeholder"
              className="me-2"
            />
            <span>Any button here</span>
          </div>
          <div
            className="d-flex align-items-center border-top border-bottom py-2 justify-content-center"
            style={{ borderColor: "#d9d9d9", marginBottom: "10px" }}
          >
            <img
              src="/Images/hourglass.png"
              alt="placeholder"
              className="me-2"
            />
            <span>Pending approvals</span>
          </div>
        </div>
      </div>

      {/* Main Content Section (col-md-9) */}
      <div className="col-md-9 p-3">
        <textarea
          className="form-control"
          rows="20"
          placeholder="Main content area"
        ></textarea>
      </div>
    </div> 
    ),

    icon3: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
        </div>
        <div className="col-md-9 p-3">
          <h4>Main Content Section</h4>
          <p>
            This is the main content area for Icon 3. Add any desired content
            here, such as text, images, or additional components.
          </p>
        </div>
      </div>
    ),
    icon4: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
        </div>
        <div className="col-md-9 p-3">
          <h4>Main Content Section</h4>
          <p>
            This is the main content area for Icon 4. Add any desired content
            here, such as text, images, or additional components.
          </p>
        </div>
      </div>
    ),
    icon5: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
        </div>
        <div className="col-md-9 p-3">
          <h4>Main Content Section</h4>
          <p>
            This is the main content area for Icon 5. Add any desired content
            here, such as text, images, or additional components.
          </p>
        </div>
      </div>
    ),
    icon6: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
        </div>
        <div className="col-md-9 p-3">
          <h4>Main Content Section</h4>
          <p>
            This is the main content area for Icon 6. Add any desired content
            here, such as text, images, or additional components.
          </p>
        </div>
      </div>
    ),
    icon7: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
        </div>
        <div className="col-md-9 p-3">
          <h4>Main Content Section</h4>
          <p>
            This is the main content area for Icon 7. Add any desired content
            here, such as text, images, or additional components.
          </p>
        </div>
      </div>
    ),

   
  };

  const handleClick = () => {
    setActiveIcon("icon6");
    setShowSelect(!showSelect); // Toggle the visibility of the select dropdown
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-1 h-100vh sidebar bg-light">
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
              className={`btn ${activeIcon === "icon2" ? "active" : ""}`}
              onClick={() => setActiveIcon("icon2")}
            >
              <img
                src="/Images/Logomark2.png"
                alt="Logo"
                className="icon-image"
              />
            </button>
            <button
              className={`btn ${activeIcon === "icon3" ? "active" : ""}`}
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
          {/* Render Dynamic Content Based on Active Icon */}
          <div className="p-3">{iconContent[activeIcon]}</div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
