import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Current() {
  const passedRecord = useOutletContext();
  const [currentRecord, setCurrentRecord] = useState(passedRecord);
  function toggleReturn(e) {
    const returnStatus = e.target.checked;
    setCurrentRecord((c) => {
      c[parseInt(e.target.id)].isReturned = returnStatus;
      return c;
    });
    console.log(currentRecord);
  }
  return (
    <div>
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
                    Returned
                  </td>
                  <td>
                    <select name="violation" id="violationType">
                      <option value="">No violation</option>
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
  );
}
export default Current;
