import { Outlet, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleAccounts = () => {
    if ((document.getElementById("modal").style.display = "none")) {
      document.getElementById("modal").style.display = "flex";
    } else if ((document.getElementById("modal").style.display = "flex")) {
      document.getElementById("modal").style.display = "none";
    }
  };
  const studAccount = () => {
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
        <div id="modal" style={{ marginTop: 10, display: "none" }}>
          <button
            style={{ marginRight: 10, background: "teal" }}
            onClick={studAccount}
          >
            Student Account
          </button>
          <button style={{ background: "#6bc9c9" }}>Librarian Account</button>
        </div>
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
