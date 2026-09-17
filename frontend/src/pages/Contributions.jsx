function Contributions() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Contributions</h1>
          <p>Manage member contributions</p>
        </div>

        <button className="primary-button">
          + Record Contribution
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Contributions</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>This Month</p>
          <h2>KSh 0</h2>
        </div>

        <div className="stat-card">
          <p>Contributors</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Contribution Records</h2>

        <div className="empty-state">
          <h3>No contributions yet</h3>
          <p>Recorded contributions will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default Contributions;