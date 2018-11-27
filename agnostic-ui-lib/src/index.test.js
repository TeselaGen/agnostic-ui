const agnosticUI = require("../src");

describe("agnostic-ui", () => {
  it("exports a library of components", () => {
    expect(typeof agnosticUI).toBe("object");
  });

  it("exports a Form component", () => {
    expect(typeof agnosticUI.Form).toBe("function");
  });
});
