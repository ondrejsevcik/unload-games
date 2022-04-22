import { classNames } from "./class-names";

test("it returns correct classes", () => {
  expect(classNames({})).toEqual("");
  expect(classNames("")).toEqual("");
  expect(classNames("css-class")).toEqual("css-class");
  expect(classNames("css-class-1 css-class-2")).toEqual(
    "css-class-1 css-class-2"
  );
  expect(
    classNames("css-class", {
      "not-included": false,
      included: true,
    })
  ).toEqual("css-class included");
});
