import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

function App() {
  const [showSidebar, setSidebar] = useState(false);
  const sidebarHandler = () => {
    setSidebar(!showSidebar);
  };

  return (
    <>
      <div className="container-fluid py-4">
        <BrowserRouter>
          <div
            className={`sidebar-main ps ${showSidebar ? "showSidebar" : ""}`}
          >
            <Sidebar />
          </div>
          <div className="main-content ps-2 pe-2">
            {/* TODO: Add dynamic NavigationBar tag */}
            <NavigationBar sidebarHandler={sidebarHandler} tag="Dashboard" />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pages/dashboard" element={<Dashboard />} />
              <Route path="/pages/table" element={<Table />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
