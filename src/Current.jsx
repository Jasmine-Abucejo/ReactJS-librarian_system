import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Current() {
  const [rowId, setRowId] = useState();
  const [isReturned, setIsReturned] = useState(false);
  const passedRecord = useOutletContext();
  const [currentRecord, setCurrentRecord] = useState(passedRecord);
  const toggleReturn = (e) => {
    document.getElementById("currents").style.opacity = 0.3;
    document.getElementById("currents").style.pointerEvents = "none";
    setIsReturned(!isReturned);
    console.log(isReturned);
    setRowId(e.target.id);

    // console.log(rowId);
  };
  // useEffect(() => {
  //   setCurrentRecord((c) =>
  //     c.map((record, index) => {
  //       index === rowId ? console.log(record) : record;
  //     })
  //   );
  //   console.log(currentRecord[rowId]);
  //   console.log(rowId);
  // }, [rowId]);
  return (
    <div style={{ position: "relative" }}>
      <div id="currents">
        <h1>All Currently Borrowed Books</h1>
        <table
          style={{
            border: "solid black",
            borderCollapse: "collapse",
            width: "60vw",
            textAlign: "center",
          }}
        >
          <thead style={{ background: "aquamarine" }}>
            <tr>
              <th>Book Title</th>
              <th>Borrower Name</th>
              <th>Borrower Course</th>
              <th>Borrower Year Level</th>
              <th>Time Borrowed</th>
              <th>Return Date</th>
              <th>Return Status</th>
              <th>Violation Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRecord.map(
              (record, index) =>
                record.isReturned === false && (
                  <tr key={index}>
                    <td>{record.bookTitle}</td>
                    <td>{record.borrowerName}</td>
                    <td>{record.borrowerCourse}</td>
                    <td>{record.borrowerYearLevel}</td>
                    <td>{record.timeBorrowed}</td>
                    <td>{record.returnDate}</td>
                    <td>
                      <input
                        type="checkbox"
                        name="return"
                        id={index}
                        onChange={toggleReturn}
                      />
                      Return
                    </td>
                    <td>
                      <select name="violation" id="violationType">
                        <option value="No Violation">No violation</option>
                        <option value="lost">Lost</option>
                        <option value="damaged">Damaged</option>
                        <option value="late">Late Return</option>
                      </select>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: isReturned ? "block" : "none",
          zIndex: 1,
          position: "absolute",
          backgroundColor: "white",
          border: "solid black 2px",
          padding: "1em",
          top: "10%",
          left: "20%",
          right: "20%",
        }}
        id="returnModal"
      >
        <div>
          <h2>Return Confirmation</h2>
          <p>
            Are you sure you want to return{" "}
            <strong>{currentRecord[rowId]?.bookTitle}</strong>
            {""} borrowed by{" "}
            <strong>{currentRecord[rowId]?.borrowerName}</strong>?
          </p>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}
export default Current;
