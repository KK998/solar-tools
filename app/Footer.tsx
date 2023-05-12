"use client";

import { Footer } from "flowbite-react";
import { useContext } from "react";
import { ConfigContext } from "./config";

export default function Component() {
  const { logo, name, mainPageUrl } = useContext(ConfigContext);
  return (
    <Footer container className="mt-auto">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand name={name} href={mainPageUrl} src={logo} alt="Logo" />
          <Footer.LinkGroup className="gap-5">
            <Footer.Link href="/navodila">Navodila</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="https://klemen-komel.com/"
          by="Klemen Komel"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}
