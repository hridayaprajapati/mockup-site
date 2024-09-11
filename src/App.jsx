import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

function App() {
  const [hideSidebar, setSidebar] = useState(true);
  const sidebarHandler = () => {
    setSidebar(!hideSidebar);
  };

  return (
    <>
      <div className="container-fluid py-4">
        <Router>
          <div className={`sidebar-main ${hideSidebar ? "hideSidebar" : ""}`}>
            <Sidebar onClickHandler={sidebarHandler} />
          </div>
          <div className="main-content ps-2 pe-2">
            <NavigationBar onClickHandler={sidebarHandler} tag="Dashboard" />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pages/dashboard" element={<Dashboard />} />
              <Route path="/pages/table" element={<Table />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
