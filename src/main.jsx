import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Login from "./Login";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
