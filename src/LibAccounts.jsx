function LibAccounts() {
  return (
    <div>
      <h1>Librarian Accounts</h1>
      <div>
        <table
          style={{
            border: "solid black",
            borderCollapse: "collapse",
            width: "60vw",
          }}
        >
          <thead style={{ background: "#6bc9c9" }}>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default LibAccounts;
