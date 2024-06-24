import React from "react";

import ComparisonTableMobile from "./ComparisonTableMobile";
import ComparisonTableDekstop from "./ComparisonTableDekstop";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

const Pricing = () => {
  return (
    <section>
      <section className="text-center p-3 flex items-center flex-col gap-4 justify-center md:min-h-[40vh] min-h-[30vh]">
        <h1 className="md:text-6xl max-w-lg mx-auto text-[#222] text-4xl font-semibold">
          Our Price plans
        </h1>
        <p>Choose from three subscription tiers to best fit your needs</p>
      </section>
      {/* Desktop */}
      <ComparisonTableDekstop />

      {/* Moobile */}
      <div className="md:hidden block">
        <div className="bg-[#F6F6F6] p-5 max-w-96 mx-auto rounded-xl mb-10">
          <p className="text-lg text-[#4F4F4F]">
            Wesource is a streamlined sourcing solution for SMEs, offering
            access to{" "}
            <span className="text-[#32D483]">
              Chiness manufactures via monthly subscription plans.
            </span>
            Business select from three tiers, provide product parameters, and
            recive expert help in finding suitable factories.
          </p>
        </div>
        <ComparisonTableMobile />
      </div>

      <div className="bg-[#32D483] max-w-[1250px] mx-auto rounded-xl grid md:grid-cols-2 grid-cols-1 items-center p-7">
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <Image src="/base.svg" alt="base.svg" width={60} height={60} />
          <p className="md:text-left text-center font-bold text-3xl text-white">
            Still have some <br className="md:hidden block" /> questions?
          </p>
          <p className="text-white md:text-left text-center text-lg">
            Not sure which tier is right for you? Contact us for further
            assistance. Our team is here to address any questions or concerns
            you may have, ensuring a seamless experience to your needs
          </p>
        </div>

        {/* from */}
        <div className="flex flex-col md:items-start items-center justify-center space-y-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="text-[#fff]">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              className="border-[#fff]/50 border bg-[#32D483] outline-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="text-[#fff]">
              Email
            </Label>
            <Input
              type="text"
              id="name"
              className="border-[#fff]/50 border bg-[#32D483] !outline-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="text-[#fff]">
              Message
            </Label>
            <textarea
              type="text"
              id="name"
              className="border-[#fff]/50 border p-3 h-40 bg-[#32D483] rounded-md outline-none"
            />
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm pl-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#fff]"
            >
              Accept terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="px-6 text-sm max-w-40 font-[500] w-full py-2 bg-white text-black rounded-lg "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
