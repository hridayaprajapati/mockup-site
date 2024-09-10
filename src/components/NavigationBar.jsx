import {
  FaBars,
  FaBell,
  FaGear,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavigationBar = ({ tag, sidebarHandler }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center container-fluid py-1 px-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#!">Pages</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {tag}
          </li>
        </ol>
        <h6 className="fw-bold mb-0">{tag}</h6>
      </nav>

      <div className="d-flex align-items-center gap-2">
        <div className="input-group">
          <span className="input-group-text text-body">
            <FaMagnifyingGlass />
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Type here..."
          />
        </div>

        <Link to="#!" className="btn btn-outline-primary btn-sm w-50 mb-0 me-3">
          ONLINE BUILDER
        </Link>

        <ul className="navbar-nav d-flex flex-row mb-0">
          <li className="nav-item">
            <Link to="#!" className="nav-link">
              <FaUser />
            </Link>
          </li>
          <li className="nav-item d-flex align-items-center">
            <button
              id="sidebarToggler"
              onClick={sidebarHandler}
              className="nav-link text-body p-0"
            >
              <FaBars />
            </button>
          </li>
          <li className="nav-item d-flex align-items-center">
            <Link to="#!" className="nav-link">
              <FaGear />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#!" className="nav-link">
              <FaBell />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
