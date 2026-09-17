function Meetings() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Meetings</h1>
          <p>Manage group meetings and attendance</p>
        </div>

        <button className="primary-button">
          + Create Meeting
        </button>
      </div>

      <div className="dashboard-section">
        <h2>Meetings</h2>

        <div className="empty-state">
          <h3>No meetings recorded</h3>
          <p>
            Create a meeting to record the agenda,
            attendance and minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meetings;