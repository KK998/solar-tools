import React from "react";
import Image from "next/image";
import { Navbar, Button } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
          fill
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Solar Orodja
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/orodja/pv-sistemi/on-grid-pv">
          On-Grid PV
        </Navbar.Link>
        <Navbar.Link href="/orodja/pv-sistemi/off-grid-pv">
          Off-Grid PV
        </Navbar.Link>
        <Navbar.Link href="/orodja/sevanje/solar-radiation">
          Solar radiation
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
