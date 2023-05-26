"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { ConfigContext } from "./config";

const Header = () => {
  const { mainPageUrl, logo, name } = useContext(ConfigContext);

  return (
    <Navbar data-testid="Navigation" fluid className="sticky top-0 z-50 shadow">
      <Navbar.Brand href={mainPageUrl}>
        <div className="mr-3 w-6 h-6 sm:h-9 relative">
          <Image
            fill
            priority
            src={logo}
            alt={name}
            className="object-contain"
          />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {name}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Domov</Navbar.Link>
        <Navbar.Link href="/orodja/pv-sistemi/on-grid-pv">
          On-Grid PV
        </Navbar.Link>
        <Navbar.Link href="/orodja/pv-sistemi/off-grid-pv">
          Off-Grid PV
        </Navbar.Link>
        <Navbar.Link href="/orodja/sevanje">Solar radiation</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
