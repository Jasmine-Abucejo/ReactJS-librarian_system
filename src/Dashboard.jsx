import { useState, useEffect, useRef } from "react";

function Dashboard() {
  const [isOn, setIsOn] = useState(false);
  const [newRecord, setNewRecord] = useState([]);
  const [courses, setCourses] = useState([]);
  const bookTitle = useRef();
  const borrowerName = useRef();
  const borrowerCourse = useRef();
  const borrowerYearLevel = useRef();
  const borrowerCollege = useRef("");
  const timeBorrowed = useRef();

  const ceitOptions = [
    { value: "BSIT", label: "BSIT" },
    { value: "BSCS", label: "BSCS" },
  ];
  const ccjOptions = [
    { value: "BSHRM", label: "BSHRM" },
    { value: "BSBA", label: "BSBA" },
  ];
  const cemdsOptions = [
    { value: "BSN", label: "BSN" },
    { value: "BSPT", label: "BSPT" },
  ];

  const toggleCollege = (e) => {
    if (e.target.value === "CEIT") {
      setCourses(ceitOptions);
      console.log(courses.map((course) => course.label));
      console.log("CEIT");
    } else if (e.target.value === "CCJ") {
      setCourses(ccjOptions);
      console.log(courses);
      console.log("CCJ");
    } else if (e.target.value === "CEMDS") {
      setCourses(cemdsOptions);
      console.log(courses);
      console.log("CEMDS");
    }
  };

  function addRecord(e) {
    e.preventDefault();
    const newEntry = {
      bookTitle: bookTitle.current.value,
      borrowerName: borrowerName.current.value,
      borrowerCourse: borrowerCourse.current.value,
      borrowerYearLevel: borrowerYearLevel.current.value,
      timeBorrowed: new Date().toLocaleString(),
    };
    setNewRecord((n) => [...n, newEntry]);
    bookTitle.current.value = "";
    borrowerName.current.value = "";
    borrowerCourse.current.value = "";
    borrowerYearLevel.current.value = "";
    setIsOn(false);
    console.log(borrowerCourse.current);
  }
  useEffect(() => {
    isOn
      ? (document.getElementById("add-popup").style.display = "flex")
      : (document.getElementById("add-popup").style.display = "none");
  }, [isOn]);

  return (
    <div style={{ position: "relative" }}>
      <h1>Borrowed Today</h1>
      <div>
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

              <th>Year Level</th>
              <th>Course</th>

              <th>Time Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {newRecord.map((record, index) => (
              <tr key={index}>
                <td>{record.bookTitle}</td>
                <td>{record.borrowerName}</td>
                <td>{record.borrowerCourse}</td>
                <td>{record.borrowerYearLevel}</td>
                <td>{record.timeBorrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        style={{
          marginTop: "10px",
          padding: "5px",
          marginRight: "10px",
        }}
        onClick={() => setIsOn(!isOn)}
      >
        Add Record
      </button>
      <div
        style={{
          display: "none",
          zIndex: 1,
          position: "absolute",
          border: "solid black 2px",
          backgroundColor: "white",
          width: "60%",
          height: "60%",
          top: "10vh",
          left: "10vw",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "row",
          overflow: "auto",
        }}
        id="add-popup"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Add Record</h3>
          <form
            onSubmit={addRecord}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flex: 1,
            }}
          >
            <label htmlFor="book-title"> Book Title: </label>
            <input type="text" id="book-title" ref={bookTitle} />
            <label htmlFor="borrower-name"> Borrower Name: </label>
            <input type="text" id="borrower-name" ref={borrowerName} />
            <label htmlFor="borrower-college"> Borrower College: </label>
            <select
              name="college"
              id="borrower-college"
              ref={borrowerCollege}
              onChange={toggleCollege}
            >
              <option value="">--Select College--</option>
              <option value="CEIT">CEIT</option>
              <option value="CCJ">CCJ</option>
              <option value="CEMDS">CEMDS</option>
            </select>
            <label htmlFor="borrower-course"> Borrower Course: </label>
            <select name="course" id="borrower-course" ref={borrowerCourse}>
              <option value="">--Select Course--</option>

              {courses.map((course, index) => (
                <option key={index} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
            {/* <label htmlFor="borrower-course"> Borrower Course: </label>
            <input type="text" id="borrower-course" ref={borrowerCourse} /> */}
            <label htmlFor="borrower-year-level"> Borrower Year Level: </label>
            <input
              type="text"
              id="borrower-year-level"
              ref={borrowerYearLevel}
            />

            <button>Add Record</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
