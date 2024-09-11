import { Link } from "react-router-dom";

const AdvancedCard = ({
  title,
  sub_title,
  description,
  imgSrc,
  imgAltName,
  customClass = "",
}) => {
  return (
    <div className={`card shadow rounded-4 h-100 ${customClass}`}>
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
            <div className="col-lg-5 ms-auto d-flex flex-column justify-content-center">
              <div className="bg-gradient-primary h-100 rounded-4">
                <div className="rounded-4">
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
