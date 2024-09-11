import "./style.css";

import {
  FaEarthAfrica,
  FaCoins,
  FaBookOpen,
  FaCartShopping,
} from "react-icons/fa6";

import AdvancedCard from "../../components/AdvancedCard";
import Card from "../../components/Card";

const Dashboard = () => {
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
      <div className="row">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <AdvancedCard
            title={"Built by developers"}
            sub_title={"Soft UI Dashboard"}
            description={
              "From colors, cards, typography to complex elements, you will find the full documentation."
            }
            imgSrc="/rocket-white.webp"
          />
        </div>
        <div className="col-lg-5">
          <AdvancedCard
            customClass={
              "card-with-bg text-white bg-cover z-index-1 d-flex flex-column"
            }
            sub_title={"Work with the rockets"}
            description={
              "Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
