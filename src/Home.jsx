import Accounts from "./Accounts.jsx";
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const handleAccounts = () => {
    navigate("/accounts");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleAccounts}>Accounts</button>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="accounts" element={<Accounts />} />
      </Route>
    </Routes>
  );
}
export default Home;
