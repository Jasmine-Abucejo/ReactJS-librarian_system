import { Outlet, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleAccounts = () => {
    // console.log(document.getElementById("modal").style.display);

    if (document.getElementById("modal").style.display === "none") {
      document.getElementById("modal").style.display = "flex";
    } else if (document.getElementById("modal").style.display === "flex") {
      document.getElementById("modal").style.display = "none";
    }
  };
  const studAccount = () => {
    navigate("/home/studaccounts");
  };
  const libAccount = () => {
    navigate("/home/libaccounts");
  };

  function toDash() {
    navigate("/home/dashboard");
  }
  function toCurrent() {
    navigate("/home/currents");
  }
  const allCurrent = [
    {
      bookTitle: "Kafka on the Shore",
      borrowerName: "Jasmine Abucejo",
      borrowerCourse: "BSCS",
      borrowerYearLevel: "5",
      timeBorrowed: new Date().toLocaleString(),
      returnDate: new Date().toLocaleString(),
      isReturned: false,
      violation: "",
    },
    {
      bookTitle: "Before the Coffee Gets Cold",
      borrowerName: "Jasmine Abucejo",
      borrowerCourse: "BSCS",
      borrowerYearLevel: "5",
      timeBorrowed: new Date().toLocaleString(),
      returnDate: new Date().toLocaleString(),
      isReturned: false,
      violation: "",
    },
  ];
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: "95vh",
          width: "20vw",
          borderRight: "solid",
          marginRight: "1em",
          paddingRight: "1em",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "1em",
        }}
      >
        <h1>Home</h1>
        <button onClick={toDash}>Dashboard</button>
        <button onClick={toCurrent}>All Currently Borrowed</button>
        <button>Violations</button>
        <button onClick={handleAccounts}>Accounts</button>
        <div id="modal" style={{ marginTop: 10, display: "none" }}>
          <button
            style={{ marginRight: 10, background: "teal" }}
            onClick={studAccount}
          >
            Student Account
          </button>
          <button style={{ background: "#6bc9c9" }} onClick={libAccount}>
            Librarian Account
          </button>
        </div>
        <button>History</button>
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
          height: "95vh",
        }}
      >
        <Outlet context={allCurrent} />
      </div>
    </div>
  );
}

export default Home;
