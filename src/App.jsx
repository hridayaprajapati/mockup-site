import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <div
            className={`sidebar-main ps ${
              hideSidebar ? "hideSidebar" : "my-3 ms-2 border-radius-xl"
            }`}
          >
            <Sidebar onClickHandler={sidebarHandler} />
          </div>
          <div className="main-content ps-2 pe-2">
            {/* TODO: Add dynamic NavigationBar tag */}
            <NavigationBar onClickHandler={sidebarHandler} tag="Dashboard" />
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
