import { Link } from "react-router-dom";

const AdvancedCard = ({
  title,
  sub_title,
  description,
  imgSrc,
  imgAltName,
  customClass,
}) => {
  return (
    <div className={`card ${customClass} h-100`}>
      <div className="card-body p-3">
        <div className="row">
          <div className={imgSrc ? "col-lg-6" : "col-lg-12"}>
            <div className="d-flex flex-column">
              <p className="mb-1 pt-2 fw-bold">{title}</p>
              <h5 className="fw-bold">{sub_title}</h5>
              <p className="mb-5">{description}</p>
              <Link to="#!" className="text-body text-sm fw-bold mt-auto">
                Read more
              </Link>
            </div>
          </div>
          {imgSrc && (
            <div className="col-lg-5 ms-auto mt-5 mt-lg-0 h-100">
              <div className="bg-gradient-primary border-radius-lg position-relative h-100">
                <img
                  src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                  className="position-absolute  w-50 top-0 d-lg-block d-none"
                  alt="waves"
                />
                <div className="d-flex align-items-center justify-content-center h-100">
                  <img
                    src={imgSrc}
                    alt={imgAltName}
                    className="w-100 pt-4 z-index-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedCard;
