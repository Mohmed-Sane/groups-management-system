function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    "Dashboard",
    "Members",
    "Contributions",
    "Expenses",
    "Meetings",
    "Reports",
    "Settings",
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Groups MS</h2>
        <p>Management System</p>
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item}
            className={activePage === item ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;