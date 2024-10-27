import { Outlet, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleAccounts = () => {
    navigate("/home/accounts");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20vw",
          borderRight: "solid",
        }}
      >
        <h1>Home</h1>
        <button onClick={handleAccounts}>Accounts</button>
      </div>
      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          width: "80vw",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
