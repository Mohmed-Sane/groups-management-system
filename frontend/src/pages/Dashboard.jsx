import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of your group activities</p>
        </div>

        <button className="primary-button">+ Add Transaction</button>
      </div>

      <div className="stats-grid">
        <StatCard title="Members" value="0" />
        <StatCard title="Contributions" value="KSh 0" />
        <StatCard title="Expenses" value="KSh 0" />
        <StatCard title="Balance" value="KSh 0" />
      </div>

      <div className="dashboard-section">
        <h2>Recent Transactions</h2>

        <div className="empty-state">
          <h3>No transactions yet</h3>
          <p>
            Contributions and expenses will appear here when they are added.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;