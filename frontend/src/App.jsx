import { useState } from "react";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Contributions from "./pages/Contributions";
import Expenses from "./pages/Expenses";
import Meetings from "./pages/Meetings";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Members":
        return <Members />;

      case "Contributions":
        return <Contributions />;

      case "Expenses":
        return <Expenses />;

      case "Meetings":
        return <Meetings />;

      case "Reports":
        return <Reports />;

      case "Settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;