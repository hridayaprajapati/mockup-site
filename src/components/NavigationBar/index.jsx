import {
  FaBars,
  FaBell,
  FaGear,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavigationBar = ({ tag, onClickHandler }) => {
  return (
    <div className="container-fluid py-1 px-3 d-flex flex-wrap justify-content-between align-items-center">
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

        <Link to="#!" className="btn btn-outline-primary btn-sm w-100 mb-0">
          ONLINE BUILDER
        </Link>

        <ul className="navbar-nav d-flex flex-row mb-0">
          <li className="nav-item">
            <Link to="#!" className="nav-link">
              <FaUser />
            </Link>
          </li>
          <li className="nav-item d-flex flex-column align-self-center">
            <Link
              to="#!"
              id="sidebarToggler"
              onClick={onClickHandler}
              className="nav-link text-body p-0"
            >
              <FaBars />
            </Link>
          </li>
          <li className="nav-item">
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
