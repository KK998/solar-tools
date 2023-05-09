import { Footer } from "flowbite-react";

export default function Component() {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://ekprojekt.si"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            name="Logo"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="KK998" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}
