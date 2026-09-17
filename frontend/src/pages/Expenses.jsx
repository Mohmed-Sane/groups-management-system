function Expenses() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Expenses</h1>
          <p>Track and manage group expenses</p>
        </div>

        <button className="primary-button">
          + Record Expense
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Expenses</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>This Month</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>Expense Records</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Expense Records</h2>

        <div className="empty-state">
          <h3>No expenses yet</h3>
          <p>Recorded expenses will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default Expenses;