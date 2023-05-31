import { render, screen } from "@testing-library/react";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

describe("Layout", () => {
  describe("Header", () => {
    test("Has navigation", async () => {
      const { unmount } = render(<Header />);
      const navigation = await screen.findByTestId("Navigation");
      expect(navigation).toBeInTheDocument();
      unmount();
    });

    test("Has all links", async () => {
      const { unmount } = render(<Header />);
      const links = await screen.findAllByRole("link");

      expect(links).toHaveLength(5);

      const findLink = (href: string) =>
        links.find((link) => link.getAttribute("href") === href);

      const homeLink = findLink("/");
      expect(homeLink).toBeInTheDocument();

      const onGridLink = findLink("/orodja/pv-sistemi/on-grid-pv");
      expect(onGridLink).toBeInTheDocument();

      const offGridLink = findLink("/orodja/pv-sistemi/off-grid-pv");
      expect(offGridLink).toBeInTheDocument();

      const solarRadiationLink = findLink("/orodja/sevanje");
      expect(solarRadiationLink).toBeInTheDocument();
      unmount();
    });
  });

  describe("Footer", () => {
    test("Has link to manual", () => {
      const { unmount } = render(<Footer />);
      const manualLink = screen.getByRole("link", { name: "Navodila" });

      expect(manualLink).toBeInTheDocument();

      unmount();
    });
  });
});
