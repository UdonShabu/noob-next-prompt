import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex-center bg-red-300">
      {/* FIXME: */}
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </Link>
    </nav>
  );
};

export default Nav;
