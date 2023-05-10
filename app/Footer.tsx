"use client";

import { Footer } from "flowbite-react";

export default function Component() {
  return (
    <Footer container className="mt-auto">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            name="Solar Orodja"
            href="https://ekprojekt.si"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
          />
          <Footer.LinkGroup className="gap-5">
            <Footer.Link href="/navodila">Navodila</Footer.Link>
            <Footer.Link href="/licenca">Licenca</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="KK998" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}
