import "./style.css";

const Card = ({
  title,
  description,
  difference,
  status,
  icon: IconComponent,
}) => {
  const differenceColor = status ? "green" : "red";

  return (
    <div className="card shadow rounded-4">
      <div className="card-body p-3">
        <div className="row">
          <div className="col-8">
            <div className="numbers">
              <p className="small mb-0 text-capitalize fw-bold">{title}</p>
              <h5 className="fw-bold mb-0 d-flex flex-row flex-wrap align-items-center gap-2">
                {description}
                <div
                  id="status"
                  className="small m-0 text-capitalize fw-bold"
                  style={{ color: differenceColor }}
                >
                  {difference}
                </div>
              </h5>
            </div>
          </div>
          <div className="col-4 text-end">
            <div className="icon bg-gradient-primary card-image rounded-4">
              <i>{<IconComponent />}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
