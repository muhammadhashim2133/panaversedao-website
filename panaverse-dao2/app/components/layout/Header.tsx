import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Wrapper from "../shared/Wrapper";
import { headers } from "next/dist/client/components/headers";

function Header() {
  return (
    <header className="sticky top-0 bg-white z-10">
      <Wrapper>
        <div className="flex justify-between py-4 font-medium  items-center">
          <Image src={logo} alt="web logo" />
          <div className="flex gap-x-2">
            <div>Blog</div>
            <div>Videos</div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
