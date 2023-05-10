import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar, DarkThemeToggle } from "flowbite-react";

const Header = () => {
  // need this because of nextjs retardation
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  // need this because of nextjs retardation

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <div className="mr-3 w-6 h-6 sm:h-9 relative">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            fill
          />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Solar Orodja
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {loaded && <DarkThemeToggle /> /* NEXTJS RETARDATION */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
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
