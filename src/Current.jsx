import { useState, useRef, useEffect } from "react";

function Current() {
  const allCurrent = useRef([
    {
      bookTitle: "Kafka on the Shore",
      borrowerName: "Jasmine Abucejo",
      borrowerCourse: "BSCS",
      borrowerYearLevel: "4",
      timeBorrowed: new Date().toLocaleString(),
      returnDate: new Date().toLocaleString(),
    },
  ]);
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
          {allCurrent.current.map((record, index) => (
            <tr key={index}>
              <td>{record.bookTitle}</td>
              <td>{record.borrowerName}</td>
              <td>{record.borrowerCourse}</td>
              <td>{record.borrowerYearLevel}</td>
              <td>{record.timeBorrowed}</td>
              <td>{record.returnDate}</td>
              <td>
                <input type="checkbox" name="return" id="isReturn" />
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Current;
