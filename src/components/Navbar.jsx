import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 max-w-[1250px] mx-auto sm:px-0 px-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={100}
          className="w-[150px]"
        />
      </Link>
      <div className="hidden sm:flex space-x-6">
        <Link href="/about">About Us</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <Image
        src="/menu-mobile-icon.png"
        alt="logo"
        width={250}
        height={100}
        className="w-[25px] sm:hidden"
      />
      <p className="bg-[#37DD8B] text-white text-center px-8 py-2 rounded-xl font-semibold hidden sm:flex">
        Sign In
      </p>
    </nav>
  );
};

export default Navbar;
