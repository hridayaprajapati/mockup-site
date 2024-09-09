import {
  FaEarthAfrica,
  FaCoins,
  FaBookOpen,
  FaCartShopping,
} from "react-icons/fa6";

import Card from "./Card";

const DashboardStatus = () => {
  const data = [
    {
      title: "Today's Money",
      description: "$53,000",
      difference: "+15%",
      status: true,
      icon: FaCoins,
    },
    {
      title: "Today's Users",
      description: "2,300",
      difference: "+3%",
      status: true,
      icon: FaEarthAfrica,
    },
    {
      title: "Today's Clients",
      description: "+3,462",
      difference: "-2%",
      status: false,
      icon: FaBookOpen,
    },
    {
      title: "Today's Revenue",
      description: "$103,430",
      difference: "+5%",
      status: true,
      icon: FaCartShopping,
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((element, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-sm-12 p-3 col-xl-3">
            <Card
              title={element.title}
              description={element.description}
              difference={element.difference}
              status={element.status}
              icon={element.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardStatus;
