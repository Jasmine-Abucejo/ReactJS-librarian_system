import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Login from "./Login";
import Home from "./Home.jsx";
import Accounts from "./Accounts.jsx";
import LibAccounts from "./LibAccounts.jsx";
import Dashboard from "./Dashboard.jsx";
import Current from "./Current.jsx";

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
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/currents" element={<Current />} />
          <Route path="/home/studaccounts" element={<Accounts />} />
          <Route path="/home/libaccounts" element={<LibAccounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
