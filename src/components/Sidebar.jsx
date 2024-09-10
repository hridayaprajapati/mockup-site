import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ onClickHandler }) => {
  const navLinkItems = [
    {
      idx: 1,
      title: "Dashboard",
      linkTo: "/pages/dashboard",
    },
    {
      idx: 2,
      title: "Tables",
      linkTo: "/pages/table",
    },
    {
      idx: 3,
      title: "Billing",
      linkTo: "#!",
    },
    {
      idx: 4,
      title: "Virtual Reality",
      linkTo: "#!",
    },
    {
      idx: 5,
      title: "RTL",
      linkTo: "#!",
    },
  ];

  const accountItems = [
    {
      title: "Profile",
      linkTo: "#!",
    },
    {
      title: "Sign In",
      linkTo: "#!",
    },
    {
      title: "Sign Up",
      linkTo: "#!",
    },
  ];

  return (
    <>
      <aside className="fixed-start">
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
              <li key={item.idx} className="nav-item">
                <Link
                  to={item.linkTo}
                  onClick={onClickHandler}
                  className="nav-link mouse-pointer"
                >
                  <div className="icon"></div>
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
              <li key={index} className="nav-item">
                <Link to={item.linkTo} className="nav-link">
                  <div className="icon"></div>
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
