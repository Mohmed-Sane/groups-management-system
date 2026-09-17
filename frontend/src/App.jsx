import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {activePage === "Dashboard" ? (
          <Dashboard />
        ) : (
          <div className="coming-soon">
            <h1>{activePage}</h1>
            <p>This section will be developed next.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;