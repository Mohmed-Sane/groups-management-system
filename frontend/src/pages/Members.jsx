import { useState } from "react";

function Members() {
  const [showForm, setShowForm] = useState(false);
  const [members, setMembers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Member",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId !== null) {
      setMembers(
        members.map((member) =>
          member.id === editingId
            ? { ...member, ...formData }
            : member
        )
      );

      setEditingId(null);
    } else {
      const newMember = {
        id: Date.now(),
        ...formData,
      };

      setMembers([...members, newMember]);
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      role: "Member",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      phone: member.phone,
      email: member.email,
      role: member.role,
    });

    setEditingId(member.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);

    setFormData({
      name: "",
      phone: "",
      email: "",
      role: "Member",
    });
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Members</h1>
          <p>Manage members of your group</p>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            handleCancel();
            setShowForm(true);
          }}
        >
          + Add Member
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>
            {editingId !== null ? "Edit Member" : "Add New Member"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0712345678"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="Member">Member</option>
                <option value="Chairperson">Chairperson</option>
                <option value="Secretary">Secretary</option>
                <option value="Treasurer">Treasurer</option>
              </select>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button type="submit" className="primary-button">
                {editingId !== null ? "Update Member" : "Save Member"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="dashboard-section">
        <h2>Member List</h2>

        {members.length === 0 ? (
          <div className="empty-state">
            <h3>No members yet</h3>
            <p>Add members to start managing your group.</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.email || "-"}</td>
                    <td>{member.role}</td>

                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(member)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(member.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;