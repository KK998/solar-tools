import { formFields } from "./Form";

describe("Form", () => {
  it("Has all form fields", () => {
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
      expect(formFieldsNames).toContain(field);
    });
  });
});
