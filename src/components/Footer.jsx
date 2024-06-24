import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.png";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="sm:max-w-[1250px] sm:mx-auto sm:py-[70px] py-[50px]">
        <div className="sm:flex sm:items-center sm:justify-between sm:pb-[80px]">
          <div className="sm:flex flex-col items-center justify-center sm:pb-0 pb-10 hidden">
            <Link href="/">
              <Image src={Logo} alt="logo" className="w-[140px]" />
            </Link>
          </div>

          <div className="sm:space-x-8 flex sm:flex-row flex-col items-center justify-center sm:space-y-0 space-y-4 sm:py-0 py-8">
            <Link href="/about" className="sm:text-xs text-[#4F4F4F]">
              About us
            </Link>
            <Link href="/pricing" className="sm:text-xs text-[#4F4F4F]">
              Pricing
            </Link>
            <Link href="/blog" className="sm:text-xs text-[#4F4F4F]">
              Blog
            </Link>
            <Link href="/contact" className="sm:text-xs text-[#4F4F4F]">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center sm:pb-0 pb-10 sm:hidden">
            <Link href="/">
              <Image src={Logo} alt="logo" className="w-[140px]" />
            </Link>
          </div>

          <div className="sm:flex sm:space-x-4 flex flex-row items-center justify-center space-x-4 pb-8 sm:pb-0">
            <Link href="#">
              <Image
                src={Twitter}
                alt="Twitter"
                className="h-[30px] w-[30px]"
              />
            </Link>
            <Link href="#">
              <Image
                src={Linkedin}
                alt="Linkedin"
                className="h-[30px] w-[30px]"
              />
            </Link>
          </div>
        </div>

        <div className="bg-[#BEEAD4] h-[1px] mb-[30px] sm:mx-0 mx-[80px]" />

        <div className="sm:items-center sm:justify-center sm:space-x-8 text-xs flex sm:flex-row flex-col items-center justify-center sm:space-y-0 space-y-4">
          <Link href="/" className="text-[#4F4F4F]">
            © 2024 Wesource. All rights reserved.
          </Link>
          <Link href="/privacy" className="underline text-[#4F4F4F]">
            Privacy Policy
          </Link>
          <Link href="/service" className="underline text-[#4F4F4F]">
            Privacy of Service
          </Link>
          <Link href="/cookie" className="underline text-[#4F4F4F]">
            Cookie Settings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
