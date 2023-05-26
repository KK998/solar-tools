import { fireEvent, render, screen } from "@testing-library/react";
import Form, { formFields } from "./Form";

describe("Form", () => {
  test("Has all form fields", () => {
    const requiredFields = [
      "raddatabase",
      "startyear",
      "endyear",
      "horirrad",
      "optrad",
      "mr_dni",
      "avtemp",
    ];
    const formFieldsNames = formFields.map((field) => field.name);
    requiredFields.forEach((field) => {
      screen.findByLabelText(field);
      expect(formFieldsNames).toContain(field);
    });
  });

  test("Can submit form", async () => {
    const { unmount } = render(<Form />);

    const button = await screen.findByRole("button", { name: "Izračunaj" });
    fireEvent.click(button);

    unmount();
  });
});
