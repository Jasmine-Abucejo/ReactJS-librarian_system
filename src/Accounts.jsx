function Accounts() {
  return (
    <div>
      <h1>Accounts</h1>
      <div>
        <table
          style={{
            border: "solid black",
            borderCollapse: "collapse",
            width: 1000,
          }}
        >
          <thead style={{ background: "teal" }}>
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
export default Accounts;
