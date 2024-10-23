import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Login from "./Login";
import Home from "./Home.jsx";
import Accounts from "./Accounts.jsx";

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
        <Route path="/home" element={<Home />}>
          <Route path="/home/accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
