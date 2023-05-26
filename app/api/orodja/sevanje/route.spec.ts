import { MockBodyOptionalLat, mockBody } from "./(mock)/request";
import { readBodyValueOrThrow } from "./(utils)/validators";

describe("Request body parsing", () => {
  test("Does not throw if all values", () => {
    expect(() => readBodyValueOrThrow(mockBody)).not.toThrow();
  });
  test("Throws if not all values in body", () => {
    const body: MockBodyOptionalLat = { ...mockBody };
    delete body["lat"];
    const properBody = body as typeof mockBody; // just so the type is "currect"
    expect(() => readBodyValueOrThrow(properBody)).toThrow();
  });
});
