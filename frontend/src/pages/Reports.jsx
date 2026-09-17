function Reports() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>View group financial and membership reports</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Members</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <p>Total Contributions</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>Total Expenses</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>Balance</p>
          <h2>KSh 0</h2>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Available Reports</h2>

        <div className="report-list">
          <button className="report-button">
            Financial Summary
          </button>

          <button className="report-button">
            Member Contributions
          </button>

          <button className="report-button">
            Expense Report
          </button>

          <button className="report-button">
            Meeting Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reports;