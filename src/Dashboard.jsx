import { useState, useEffect } from "react";

function Dashboard() {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    isOn
      ? (document.getElementById("add-popup").style.display = "flex")
      : (document.getElementById("add-popup").style.display = "none");
  }, [isOn]);
  function triggerPopup() {
    document.getElementById("add-popup").style.display = "flex";
    document.getElementById("add-popup").style.flex = 1;
  }
  return (
    <div style={{ position: "relative" }}>
      <h1>Borrowed Today</h1>
      <div>
        <table
          style={{
            border: "solid black",
            borderCollapse: "collapse",
            width: "60vw",
          }}
        >
          <thead style={{ background: "aquamarine" }}>
            <tr>
              <th>Book Title</th>
              <th>Borrower Name</th>

              <th>Year Level</th>
              <th>Course</th>

              <th>Time Borrowed</th>
            </tr>
          </thead>
        </table>
      </div>
      <button
        style={{
          marginTop: "10px",
          padding: "5px",
          marginRight: "10px",
        }}
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        Add Record
      </button>
      <div
        style={{
          display: "none",
          zIndex: 1,
          position: "absolute",
          border: "solid black 2px",
          backgroundColor: "aquamarine",
          width: "40vw",
          height: "40vh",
          top: "10vh",
          left: "10vw",
        }}
        id="add-popup"
      ></div>
    </div>
  );
}

export default Dashboard;
