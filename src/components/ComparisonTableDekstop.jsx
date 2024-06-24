import React from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    section: "Product Features",
    features: [
      "Sourcing solution for SMEs",
      "Expert factory matching assistance",
      "Product quality control inspections",
      "Supplier negotiation and communication",
      "Production timeline management",
    ],
    items: [
      { name: "Product 1", features: [true, true, false, true, true] },
      { name: "Product 2", features: [true, false, true, false, true] },
      { name: "Product 3", features: [true, true, true, true, true] },
    ],
  },
  {
    section: "Customer Support",
    features: [
      "Dedicated account manager",
      "Customer service hotline",
      "In-person support",
      "Free replacement service",
      "Monthly product sourcing insights",
    ],
    items: [
      { name: "Product 1", features: [true, false, false, true] },
      { name: "Product 2", features: [true, true, false, true] },
      { name: "Product 3", features: [true, true, true, true] },
    ],
  },
  {
    section: "Additional Benefits",
    features: [
      "1-year Warranty",
      "30-day Money-back guarantee",
      "Monthly product sourcing insights",
      "Free shipping within USA",
      "1-year Warranty",
    ],
    items: [
      { name: "Product 1", features: [true, true, false] },
      { name: "Product 2", features: [true, false, true] },
      { name: "Product 3", features: [true, true, true] },
    ],
  },
];

const PlanCard = ({ price, title, buttonText, isBusiness }) => {
  return (
    <div
      className={`${
        isBusiness ? "bg-[#36DA88]" : "bg-white"
      } rounded-xl p-5 space-y-10 mb-10 rounded-lg  my-4`}
    >
      <h4
        className={`text-lg text-center font-semibold ${
          isBusiness ? "text-white" : "text-[#222]"
        }`}
      >
        {title}
      </h4>
      <h3
        className={`${
          isBusiness ? "text-white" : "text-[#32D483]"
        } text-6xl text-center font-bold `}
      >
        {price}
      </h3>

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
  );
};

const ComparisonTableDekstop = () => {
  const plans = [
    {
      price: "$19",
      title: "Basic",
      buttonText: "Choose plan",
    },
    {
      price: "$29",
      title: "Business",
      buttonText: "Choose plan",
    },
    {
      price: "$49",
      title: "Enterprise",
      buttonText: "Choose plan",
    },
  ];
  return (
    <div className="max-w-[1250px] md:block hidden mx-auto p-4 bg-white rounded-lg">
      <div className="lg:hidden block ">
          <div className="bg-[#F6F6F6] p-5 max-w-96 mx-auto rounded-xl mb-10">
            <p className="text-sm text-[#4F4F4F]">
              Wesource is a streamlined sourcing solution for SMEs, offering
              access to{" "}
              <span className="text-[#32D483]">
                Chiness manufactures via monthly subscription plans.
              </span>
              Business select from three tiers, provide product parameters, and
              recive expert help in finding suitable factories.
            </p>
          </div>
        </div>
      <div className="grid grid-cols-4 items-center">
        <div className="lg:block hidden">
          <div className="bg-[#F6F6F6] p-5 max-w-96 mx-auto rounded-xl mb-10">
            <p className="text-sm text-[#4F4F4F]">
              Wesource is a streamlined sourcing solution for SMEs, offering
              access to{" "}
              <span className="text-[#32D483]">
                Chiness manufactures via monthly subscription plans.
              </span>
              Business select from three tiers, provide product parameters, and
              recive expert help in finding suitable factories.
            </p>
          </div>
        </div>

        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            price={plan.price}
            title={plan.title}
            buttonText={plan.buttonText}
            isBusiness={plan?.title === "Business"}
          />
        ))}
      </div>
      {data.map((section, index) => (
        <div key={index} className="mb-8">
          <div className="bg-[#EEF9F4] p-4 rounded-xl ">
            <p className="text-xl text-[#2ECC7E] font-[450]">
              {section.section}
            </p>
          </div>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-white ">
              <TableBody>
                {section.features.map((feature, featureIndex) => (
                  <TableRow key={featureIndex}>
                    <TableHead className="py-6 text-gray-500 px-4 w-[25%]">
                      {feature}
                    </TableHead>
                    {section.items.map((item, itemIndex) => (
                      <TableHead
                        key={itemIndex}
                        className="py-2 px-4 w-[25%] text-center"
                      >
                        <div className="flex justify-center items-center py-2 px-4">
                          {item.features[featureIndex] ? (
                            <IoMdCheckmark
                              size={25}
                              className="text-[#2ECC7E] p-1 bg-[#EEF9F4] rounded-full"
                            />
                          ) : (
                            <IoMdClose
                              size={25}
                              className="text-[red] p-1 bg-red-50 rounded-full"
                            />
                          )}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTableDekstop;
