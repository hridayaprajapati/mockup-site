import "./style.css";

import { FaXmark, FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ onClickHandler }) => {
  const navLinkItems = [
    {
      idx: 1,
      title: "Dashboard",
      linkTo: "/pages/dashboard",
      icon: FaShop,
    },
    {
      idx: 2,
      title: "Tables",
      linkTo: "/pages/table",
      icon: "",
    },
    {
      idx: 3,
      title: "Billing",
      linkTo: "#!",
      icon: "",
    },
    {
      idx: 4,
      title: "Virtual Reality",
      linkTo: "#!",
      icon: "",
    },
    {
      idx: 5,
      title: "RTL",
      linkTo: "#!",
      icon: "",
    },
  ];

  const accountItems = [
    {
      title: "Profile",
      linkTo: "#!",
      icon: "",
    },
    {
      title: "Sign In",
      linkTo: "#!",
      icon: "",
    },
    {
      title: "Sign Up",
      linkTo: "#!",
      icon: "",
    },
  ];

  return (
    <>
      <aside className="ps fixed-start">
        <div className="sidenav-header d-flex py-2 pe-3">
          <Link className="navbar-brand" to="/pages/dashboard" target="_blank">
            <img
              src="/logo-ct-dark.webp"
              className="navbar-brand-img"
              alt="main_logo"
            />
            <span className="ms-1 fw-bold">Soft UI Dashboard</span>
          </Link>
          <div onClick={onClickHandler} className="xmark cursor-pointer">
            <FaXmark />
          </div>
        </div>
        <hr className="horizontal-divider mx-5" />
        <nav className="navbar-nav">
          <ul className="nav-list list-unstyled">
            {navLinkItems.map((item) => (
              <li key={item.idx} className="nav-item sidebar-navitem">
                <Link
                  to={item.linkTo}
                  onClick={onClickHandler}
                  className="nav-link mouse-pointer"
                >
                  {item.icon && (
                    <div className="shadow sidebar-icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <item.icon />
                    </div>
                  )}
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="nav-item mt-3">
              <h6 className="section-header ps-4 ms-2 text-uppercase text-xs fw-bold">
                Account Pages
              </h6>
            </li>
            {accountItems.map((item, index) => (
              <li key={index} className="nav-item sidebar-navitem">
                <Link to={item.linkTo} className="nav-link">
                  {item.icon && (
                    <div className="shadow sidebar-icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <item.icon />
                    </div>
                  )}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
