import React, { useState } from "react";
import "./InnerPage.css"; // Include your custom CSS for styling
import { Accordion, Dropdown } from "react-bootstrap";
import MixedChart from "./Chart";
// import Chart from 'chart.js/auto';

// import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
const Chatbot = () => {
  const [activeIcon, setActiveIcon] = useState("icon1");
  const [showSelect, setShowSelect] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  // Toggle search bar visibility
  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

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
            className="d-flex flex-row justify-content-flex-start align-items-center position-relative"
            style={{ top: "20px", width: "100%" }}
          >
            <span
              className="d-flex align-items-center"
              style={{ marginLeft: "71px" }}
            >
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
    icon4: (
      <div className="row">
        {/* Sidebar Section (col-md-3) */}
        <div className="col-md-3 bg-light d-flex flex-column">
          {" "}
          {/* Search Bar with Lens and Filter */}
          {/* <div className="d-flex align-items-center mb-3">
          


          
            <div
              className="border d-flex align-items-center rounded px-2 flex-grow-1"
              style={{ borderColor: "#d9d9d9" }}
            >
              <i className="bi bi-search text-muted me-2"></i>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search..."
                style={{ boxShadow: "none" }}
              />
            </div>

        
            <div
              className="border d-flex align-items-center rounded px-2 ms-3"
              style={{
                borderColor: "#d9d9d9",
                height: "37px",
                backgroundColor: "white",
              }}
            >
              <i className="bi bi-filter text-muted me-2"></i>
              <span>Filter</span>
            </div>
          </div> */}
          {/* Image and Text Section */}
          {/* <div
            className="d-flex align-items-center border-top border-bottom py-2"
            style={{ borderColor: "#d9d9d9" }}
          >
            <img
              src="/Images/nameicon.png"
              alt="placeholder"
              className="me-2"
            />
            <span>Mashreq NeoAI</span>
          </div> */}
          {/* Chat History */}
          {/* <Accordion defaultActiveKey="0" className="w-100">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>Chat History</span>
        </Accordion.Header>
        <Accordion.Body>
          <ul className="list-group">
            <li className="list-group-item">Chat 1: Hello, how are you?</li>
            <li className="list-group-item">Chat 2: What is the update?</li>
            <li className="list-group-item">Chat 3: Can we schedule a call?</li>
            <li className="list-group-item">Chat 4: Thank you for your help!</li>
          </ul>
          <div className="d-flex justify-content-end mt-2">
            <Dropdown align="end">
              <Dropdown.Toggle
                as="span"
                className="bi bi-three-dots no-arrow"
                style={{ cursor: "pointer" }}
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
          <div className="d-flex align-items-center position-relative">
            {/* New Chat Section */}
            <div className="new-chat d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.9155 12.0833V7.08333M8.41554 9.58333H13.4155M10.9155 16.6667C14.8276 16.6667 17.9989 13.4953 17.9989 9.58333C17.9989 5.67132 14.8276 2.5 10.9155 2.5C7.00352 2.5 3.83221 5.67132 3.83221 9.58333C3.83221 10.375 3.96208 11.1363 4.20168 11.8472C4.29185 12.1147 4.33693 12.2484 4.34506 12.3512C4.35309 12.4527 4.34702 12.5238 4.32192 12.6225C4.2965 12.7223 4.24037 12.8262 4.12812 13.034L2.76507 15.557C2.57064 15.9168 2.47343 16.0968 2.49519 16.2356C2.51414 16.3566 2.58533 16.4631 2.68985 16.5269C2.80985 16.6001 3.01329 16.579 3.42016 16.537L7.68768 16.0958C7.81691 16.0825 7.88153 16.0758 7.94042 16.0781C7.99835 16.0803 8.03924 16.0857 8.09573 16.0987C8.15317 16.112 8.22539 16.1398 8.36984 16.1954C9.15988 16.4998 10.0182 16.6667 10.9155 16.6667Z"
                  stroke="#717680"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>New Chat</span>
            </div>

            {/* Search Icon */}
            <div
              className="search-icon ms-3 d-flex justify-content-center align-items-center"
              onClick={toggleSearch}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-search text-muted"></i>
            </div>

            {/* Search Bar (Toggle visibility) */}
            <div
              className={`search-bar d-flex align-items-center rounded px-2 ${
                isSearchVisible ? "d-flex" : "d-none"
              }`}
            >
              <i className="bi bi-search text-muted me-2"></i>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search..."
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
          <div className="container mt-4">
            {/* Yesterday Header */}
            <div className="d-flex flex-column align-items-start">
              <span className="yesterday-header">Today</span>
              <div className="bordered-div"></div>
            </div>

            {/* Unordered List */}
            <ul className="list-unstyled">
              {/* List Item 1 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">Locate Policy Documents</span>
              </li>

              {/* List Item 2 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">Summarize Meeting Notes</span>
              </li>

              {/* List Item 3 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">Search Legal Contracts</span>
              </li>
            </ul>
          </div>
          <div className="container mt-2">
            {/* Yesterday Header */}
            <div className="d-flex flex-column align-items-start gap-2">
              <span className="yesterday-header">Yesterday</span>
              <div className="bordered-div"></div>
            </div>

            {/* Unordered List */}
            <ul className="list-unstyled">
              {/* List Item 1 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">Extract Key Insights</span>
              </li>

              {/* List Item 2 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">
                  Compare Proposal Versions
                </span>
              </li>

              {/* List Item 3 */}
              <li className="list-item-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33243 6.33333H7.9991M5.33243 8.66667H9.9991M8.33243 13.3333C11.462 13.3333 13.9991 10.7963 13.9991 7.66667C13.9991 4.53705 11.462 2 8.33243 2C5.20282 2 2.66577 4.53705 2.66577 7.66667C2.66577 8.3 2.76966 8.90906 2.96135 9.47774C3.03348 9.69175 3.06955 9.79875 3.07605 9.88095C3.08247 9.96213 3.07762 10.019 3.05753 10.098C3.0372 10.1779 2.9923 10.261 2.90249 10.4272L1.81206 12.4456C1.65652 12.7335 1.57875 12.8774 1.59615 12.9885C1.61131 13.0853 1.66826 13.1705 1.75188 13.2215C1.84788 13.2801 2.01063 13.2632 2.33613 13.2296L5.75014 12.8767C5.85353 12.866 5.90522 12.8606 5.95234 12.8624C5.99868 12.8642 6.0314 12.8686 6.07659 12.879C6.12253 12.8896 6.18031 12.9118 6.29587 12.9564C6.9279 13.1999 7.61458 13.3333 8.33243 13.3333Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="list-item-text">Explain Sales Proposal</span>
              </li>
            </ul>
          </div>
          {/* Bottom Buttons */}
          <div className="mt-auto">
            <h3 className="analytics">Analytics</h3>
            <div
              style={{
                borderTop: "0.5px solid #d9d9d9",
                paddingBottom: "20px",
              }}
            ></div>
            {/* Add space between the two bottom divs */}
            {/* <div
      className="d-flex border-top border-bottom py-2 justify-content-center mb-3"
      style={{
        borderColor: "#d9d9d9",
        border: "0.5px solid #d9d9d9",
        borderRadius: "10px",
      }}
    >
      <img
        src="/Images/button.png"
        alt="placeholder"
        className="me-2"
      />
      <span>Any button here</span>
    </div> */}
            <div className="d-flex flex-column align-items-start gap-2 cost-query-card mt-2 px-4 mb-4">
              {/* Top Section: Cost/Query */}
              <span className="cost-query-text">Cost/Query</span>

              {/* Bottom Section */}
              <div className="d-flex justify-content-between w-100">
                {/* Left Side: $0.1 */}
                <span className="cost-value">$0.1</span>

                {/* Right Side: Arrow Button and Percentage */}
                <div className="d-flex align-items-center gap-2">
                  {/* Down Arrow Button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.00065 3.3335V12.6668M8.00065 12.6668L12.6673 8.00016M8.00065 12.6668L3.33398 8.00016"
                      stroke="#17B26A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Percentage (Green) */}
                  <span className="percentage-text">23%</span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-start gap-2 cost-query-card mt-4 px-4 mb-4">
              {/* Top Section: Response Time */}
              <span className="cost-query-text">Response Time</span>

              {/* Bottom Section */}
              <div className="d-flex justify-content-between w-100">
                {/* Left Side: 0.9s */}
                <span className="cost-value">0.9s</span>

                {/* Right Side: Arrow Button and Percentage */}
                <div className="d-flex align-items-center gap-2">
                  {/* Up Arrow Button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.00065 12.6668V3.3335M8.00065 3.3335L3.33398 8.00016M8.00065 3.3335L12.6673 8.00016"
                      stroke="#F04438"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Percentage (Red) */}
                  <span className="percentage-text">24%</span>
                </div>
              </div>
            </div>
            {/* <div
      className="d-flex align-items-center border-top border-bottom py-2 justify-content-center"
      style={{
        borderColor: "#d9d9d9",
        border: "0.5px solid #d9d9d9",
        borderRadius: "10px",
      }}
    >
      <img
        src="/Images/hourglass.png"
        alt="placeholder"
        className="me-2"
      />
      <span>Pending approvals</span>
    </div> */}
          </div>
        </div>

        {/* Main Content Section (col-md-9) */}
        <div className="col-md-9">
          {/* Top Bar */}
          <div
            className="d-flex justify-content-between align-items-center py-2 px-3 border-top border-bottom"
            style={{ border: "0.5px solid #d9d9d9", borderRadius: "8px" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="/Images/nameicon.png"
                alt="placeholder"
                className="me-2"
              />
              <span>Mashreq NeoAI</span>
            </div>
            <div className="d-flex" style={{ gap: "10px" }}>
              <img src="/images/buttonbellicon.png" alt="bellbutton" />
              <img src="/images/buttonplus.png" alt="plus" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="content-section mt-3">
            <div
              className="container py-3"
              style={{
                height: "70vh",
                border: "0.5px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <div
                className="chat-messages overflow-auto p-3"
                style={{
                  maxHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Left-aligned first message */}
                <div className="d-flex flex-column align-items-start mb-3">
                  <div className="p-2" style={{ maxWidth: "80%" }}>
                    <img src="/Images/chatusericon.png" /> &nbsp; Hello! Welcome
                    to the chat.
                  </div>
                </div>

                {/* Right-aligned second message */}
                <div className="d-flex flex-column align-items-end mb-3">
                  <div
                    className="p-2 text-white rounded border"
                    style={{ maxWidth: "70%", backgroundColor: "#7F56D9" }}
                  >
                    Thank you! How can I help you today?
                  </div>
                </div>

                {/* "TODAY" centered divider */}
                {/* <div className="d-flex justify-content-center my-3">
                  <span
                    className="px-3 py-1 text-white rounded"
                    style={{
                      backgroundColor: "#6c757d",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    TODAY
                  </span>
                </div> */}

                {/* Left-aligned MixedChart component */}
                <div className="d-flex flex-column align-items-start mb-3">
                  <div
                    className="p-2 rounded border"
                    style={{ maxWidth: "80%" }}
                  >
                    <MixedChart />
                  </div>
                </div>

                {/* Right-aligned third message */}
                <div className="d-flex flex-column align-items-end mb-3">
                  <div
                    className="p-2 text-white rounded border"
                    style={{ maxWidth: "70%", backgroundColor: "#7F56D9" }}
                  >
                    That chart looks interesting. Can you explain more?
                  </div>
                </div>

                {/* Left-aligned fourth message */}
                <div className="d-flex flex-column align-items-start mb-3">
                  <div className="p-2" style={{ maxWidth: "70%" }}>
                    <img src="/Images/chatusericon.png" /> &nbsp; Sure! The
                    chart displays a combination of bar and line datasets.
                  </div>
                </div>

                {/* <div className="d-flex flex-column align-items-end mb-3">
                  <div
                    className="p-2 text-white rounded border"
                    style={{ maxWidth: "70%", backgroundColor: "#7F56D9" }}
                  >
                    That chart looks interesting. Can you explain more?
                  </div>
                </div> */}
                {/* PDF Message with Download Feature */}
                {/* <div className="d-flex flex-column align-items-start mb-3">
                  <div
                    style={{
                      height: "300px",
                      overflow: "auto",
                      maxWidth: "50%",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                  >
                    <Worker
                      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                    >
                      <Viewer fileUrl="Images/kuldeep-cv1.pdf" />
                    </Worker>
                  </div>

                  <div className="mt-2 text-center">
                    <a
                      href="Images/kuldeep-cv1.pdf"
                      download
                      className="btn btn-primary"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Download PDF
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="d-flex flex-column mt-3 border rounded py-2 px-3"
                style={{ borderColor: "#d9d9d9" }}
              >
                <input
                  type="text"
                  className="form-control border-0 mb-2 messegeneoai"
                  placeholder="Message NeoAI"
                />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-paperclip me-3"
                      style={{ fontSize: "1.2rem", cursor: "pointer" }}
                    ></i>
                    <i
                      className="bi bi-at me-3"
                      style={{ fontSize: "1.2rem", cursor: "pointer" }}
                    ></i>
                    <span
                      className="border-end me-3"
                      style={{ height: "20px", borderWidth: "0.5px" }}
                    ></span>
                    <i
                      className="bi bi-mic me-3"
                      style={{ fontSize: "1.2rem", cursor: "pointer" }}
                    ></i>
                  </div>
                  <img src="images/sendmessagebutton.png" alt="Send Message" />
                </div>
              </div>
            </div>
          </div>
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
    icon2: (
      <div className="row">
        <div className="col-md-3 bg-light p-3">
          <h5>Sidebar Section</h5>
          <ul className="list-group">
            <li className="list-group-item">Item 17</li>
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
      <div className="row" style={{ height: "100vh" }}>
        {/* Sidebar Column */}

        <div className="col-md-1">
          <div className="d-flex flex-column align-items-center sidebar">
            <div className="d-flex flex-column gap-3 mt-3">
              <button
                className={`btn outline-0 border-0 ${
                  activeIcon === "icon1" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon1")}
              >
                <img
                  src="/Images/Logomark.png"
                  alt="Logomark"
                  className=""
                  style={{ height: "32px", width: "32px" }}
                />
              </button>
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon2" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon2")}
              >
                <img
                  src="/Images/home-02.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">Home</span>
              </button>
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon3" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon3")}
              >
                <img
                  src="/Images/grid-01.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">Chatbox</span>
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center ${
                  activeIcon === "icon10" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon10")}
              >
                <img
                  src="/Images/minus.svg"
                  alt="Logo"
                  className="icon-image"
                />
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon4" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon4")}
              >
                <img
                  src="/Images/dataflow-03.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">Chatbox</span>
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center  tooltip-container ${
                  activeIcon === "icon12" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon12")}
              >
                <img
                  src="/Images/database-01.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">Database</span>
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container  ${
                  activeIcon === "icon13" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon13")}
              >
                <img
                  src="/Images/rocket-02.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">Deploy</span>
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center ${
                  activeIcon === "icon10" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon10")}
              >
                <img
                  src="/Images/minus.svg"
                  alt="Logo"
                  className="icon-image"
                />
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center  tooltip-container  ${
                  activeIcon === "icon14" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon14")}
              >
                <img
                  src="/Images/horizontal-bar-chart-01.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">User</span>
              </button>

              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon14" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon14")}
              >
                <img
                  src="/Images/users-01.svg"
                  alt="Logo"
                  className="icon-image"
                />
                <span className="tooltip-text">User</span>
              </button>
            </div>
            <div className="d-flex flex-column gap-3 mt-auto mb-3">
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon5" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon5")}
              >
                <img
                  src="/Images/help-circle.svg"
                  alt="Help"
                  className="icon-image"
                />
                <span className="tooltip-text">Help</span>
              </button>
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon6" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon6")}
              >
                <img
                  src="/Images/settings-01.svg"
                  alt="Settings"
                  className="icon-image"
                />
                <span className="tooltip-text">Settings</span>
              </button>
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon8" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon8")}
              >
                <img
                  src="/Images/bell-01.svg"
                  alt="Notifications"
                  className="icon-image"
                />
                <span className="tooltip-text">Notifications</span>
              </button>
              <button
                className={`btn outline-0 border-0 d-flex justify-content-center align-items-center tooltip-container ${
                  activeIcon === "icon7" ? "active" : ""
                }`}
                onClick={() => setActiveIcon("icon7")}
              >
                <img
                  src="/Images/Avatar.png"
                  alt="Profile"
                  className="icon-image"
                />
                <span className="tooltip-text">Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Column */}
        <div className="col-md-11 p-0 m-0 g-0">
          {/* Render Dynamic Content Based on Active Icon */}
          <div className="p-3 restsection">{iconContent[activeIcon]}</div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
