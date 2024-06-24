import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const PlanFeatures = ({ item }) => {
  return (
    <div className="bg-[#fff] space-y-6">
      <div className="bg-[#EEF9F4] p-3 ">
        <p className="text-lg text-[#2ECC7E] font-[450]">{item?.title}</p>
      </div>
      <div className="px-2 space-y-5 pt-2 pb-4">
        {item?.features?.map((feature, index) => (
          <div key={index} className="flex space-x-4">
            <IoMdCheckmark
              size={25}
              className="text-[#2ECC7E] p-1 bg-[#EEF9F4] rounded-full"
            />
            <p className="text-[#4F4F4F] text-opacity-80 text-md">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlanCard = ({
  price,
  title,
  features,
  buttonText,
  additionalFeatures,
  isBusiness,
}) => {
  return (
    <div className={`  rounded-lg max-w-xl mx-auto my-4`}>
      <div
        className={`${
          isBusiness ? "bg-[#36DA88]" : "bg-white"
        } border-[#32D483] border-2 rounded-xl p-5 space-y-6 mb-10`}
      >
        <h3
          className={`${
            isBusiness ? "text-white" : "text-[#32D483]"
          } text-6xl text-center font-bold `}
        >
          {price}
        </h3>
        <h4
          className={`text-5xl text-center font-semibold ${
            isBusiness ? "text-white" : "text-[#32D483]"
          }`}
        >
          {title}
        </h4>
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-4">
            <IoMdCheckmark
              size={25}
              className={`${
                isBusiness ? "text-white bg-white/50" : "text-[#2ECC7E]"
              } p-1 bg-[#EEF9F4] rounded-full`}
            />
            <p className={`${isBusiness ? "text-white" : "text-[#32D483]"} `}>
              {feature}
            </p>
          </div>
        ))}
        <div className="pt-6 pb-3">
          <button
            className={`${
              isBusiness
                ? "text-[#32D483] bg-white"
                : "text-[#32D483] border-[#32D483]"
            } text-center font-semibold  border-2 rounded-md p-3 w-full`}
          >
            {buttonText}
          </button>
        </div>
      </div>
      {additionalFeatures?.map((item, index) => (
        <PlanFeatures key={index} item={item} />
      ))}
    </div>
  );
};

const ComparisonTableMobile = () => {
  const plans = [
    {
      price: "$19",
      title: "Basic",
      features: [
        "Expert assistance in sourcing",
        "Super-duper cleaning duration",
        "Ultra high-quality robotic dance act",
      ],
      buttonText: "Choose plan",
      additionalFeatures: [
        {
          title: "Product Features",
          features: [
            "Sourcing solution for SMEs",
            "Expert factory matching assistance",
            "Product quality control inspections",
          ],
        },
        {
          title: "Customer Support:",
          features: [
            "Dedicated account manager",
            "Dedicated account manager",
            "Dedicated account manager",
          ],
        },
        {
          title: "Additional Benefits:",
          features: [
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
          ],
        },
      ],
    },
    {
      price: "$29",
      title: "Business",
      features: [
        "Expert assistance in sourcing",
        "Super-duper cleaning duration",
        "Ultra high-quality robotic dance act",
      ],
      buttonText: "Choose plan",
      additionalFeatures: [
        {
          title: "Product Features",
          features: [
            "Sourcing solution for SMEs",
            "Expert factory matching assistance",
            "Product quality control inspections",
          ],
        },
        {
          title: "Customer Support:",
          features: [
            "Dedicated account manager",
            "Dedicated account manager",
            "Dedicated account manager",
          ],
        },
        {
          title: "Additional Benefits:",
          features: [
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
          ],
        },
      ],
    },
    {
      price: "$19",
      title: "Basic",
      features: [
        "Expert assistance in sourcing",
        "Super-duper cleaning duration",
        "Ultra high-quality robotic dance act",
      ],
      buttonText: "Choose plan",
      additionalFeatures: [
        {
          title: "Product Features",
          features: [
            "Sourcing solution for SMEs",
            "Expert factory matching assistance",
            "Product quality control inspections",
          ],
        },
        {
          title: "Customer Support:",
          features: [
            "Dedicated account manager",
            "Dedicated account manager",
            "Dedicated account manager",
          ],
        },
        {
          title: "Additional Benefits:",
          features: [
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
            "Monthly product sourcing insights",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <>
            <PlanCard
              key={index}
              price={plan.price}
              title={plan.title}
              features={plan.features}
              buttonText={plan.buttonText}
              additionalFeatures={plan.additionalFeatures}
              isBusiness={plan?.title === "Business"}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTableMobile;
