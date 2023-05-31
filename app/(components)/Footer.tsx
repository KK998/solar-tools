"use client";

import { Footer } from "flowbite-react";
import { useContext } from "react";
import { ConfigContext } from "../(utils)/config";
import t from "../(utils)/translate";
import ThemeToggler from "./ThemeToggler";

export default function Component() {
  const { logo, name, mainPageUrl } = useContext(ConfigContext);
  return (
    <Footer
      container
      className="mt-auto"
      style={{
        borderRadius: 0,
      }}
    >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand name={name} href={mainPageUrl} src={logo} alt="Logo" />
          <Footer.LinkGroup className="gap-5 items-center">
            <Footer.Link role="link" aria-label="manual-link" href="/navodila">
              {t("nav_manual")}
            </Footer.Link>
            <ThemeToggler />
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
