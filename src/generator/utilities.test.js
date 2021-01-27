import { generalMap } from "generator/dictionary";

describe("The generalMap function", () => {
  it("works for basic arrays", () => {
    const result = generalMap([0, 1, 2], (elem) => 2 * elem);
    expect(result).toEqual([0, 2, 4]);
  });

  it("works for basic string", () => {
    const result = generalMap("abc", (elem) => elem.substring(1));
    expect(result).toEqual("bc");
  });

  it("works for basic number", () => {
    const result = generalMap(5, (elem) => 3 * elem);
    expect(result).toEqual(15);
  });

  it("works for basic function", () => {
    const result = generalMap(
      (callback) => callback(2),
      null,
      (elem) => elem * 8
    );
    expect(result).toEqual(16);
  });

  it("works for basic object", () => {
    const inputObject = { a: 2, b: 5 };
    const result = generalMap(inputObject, (elem) => elem - 1);
    expect(result).toEqual({ a: 1, b: 4 });
  });

  it("works for nested arrays", () => {
    const result = generalMap([0, -1, [3, 2]], (elem) => 5 * elem);
    expect(result).toEqual([0, -5, [15, 10]]);
  });

  it("works for nested object", () => {
    const inputObject = { a: 2, b: 5, c: { d: 3, e: 12 } };
    const result = generalMap(inputObject, (elem) => elem + 1);
    expect(result).toEqual({ a: 3, b: 6, c: { d: 4, e: 13 } });
  });
});
