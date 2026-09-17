function Settings() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your group and system settings</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Group Information</h2>

        <div className="form-card">
          <div className="form-group">
            <label>Group Name</label>
            <input
              type="text"
              placeholder="Enter group name"
            />
          </div>

          <div className="form-group">
            <label>Registration Number</label>
            <input
              type="text"
              placeholder="Enter registration number"
            />
          </div>

          <div className="form-group">
            <label>Contact Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter group location"
            />
          </div>

          <button className="primary-button">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;