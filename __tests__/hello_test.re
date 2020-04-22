open Jest;
open Expect;

describe("largerThan10", () => {
  test("< 10", () => {
    Hello.largerThan10(9) |> expect |> toEqual("< 10")
  });

  test(">= 10", () => {
    Hello.largerThan10(10) |> expect |> toEqual(">= 10")
  })
});