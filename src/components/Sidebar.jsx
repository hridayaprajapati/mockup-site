import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed-start">
        <div className="sidenav-header">
          <Link className="navbar-brand" to="/pages/dashboard" target="_blank">
            <img
              src="/logo-ct-dark.webp"
              className="navbar-brand-img"
              alt="main_logo"
            />
            <span className="ms-1 fw-bold">Soft UI Dashboard</span>
          </Link>
        </div>
        <hr className="horizontal-divider" />
        <nav className="navbar-nav">
          <ul className="nav-list list-unstyled">
            <li className="nav-item">
              <Link to="/pages/dashboard" className="nav-link">
                <div className="icon"></div>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/table" className="nav-link">
                <div className="icon"></div>
                Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                Billing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                Virtual Reality
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                RTL
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="section-header ps-4 ms-2 text-uppercase text-xs fw-bold ">
                Account Pages
              </h6>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
