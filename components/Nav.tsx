import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="w-full flex-between mb-16 pt-4">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex flex_center gap-1 md:gap-3">
            <Link href="/" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn">Sign out</button>
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>
        ) : (
          <p>nani</p>
        )}
      </div>
    </nav>
  );
};

export default Nav;
