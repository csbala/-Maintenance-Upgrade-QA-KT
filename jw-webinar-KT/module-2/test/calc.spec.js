const calc = require("../calc");
const expect = require("chai").expect;

describe.only("Calculator Tests", () => {
  /*
   * calc(3).v // 3
   * calc(3).add(5).v // 8
   * calc(3).minus(2).v // 1
   * calc(4).sqrt().v // 2
   * calc(3).times(10).v // 30
   * calc(10).divide(2).v // 5
   * calc(10).modulo(5).v // 0
   * calc(5).divide(0) // throw error
   * calc(-3).sqrt() // throw error
   * calc(3).add(4)
   *     .minus(3)
   *     .times(6).v // 24
   */
  // TODO: write test cases to test the calculator
  it("Should be defined", () => {
    expect(calc).to.be.instanceOf(Function);
  });

  it("Should have stored v as number", () => {
    const element = new calc(3);

    expect(element.v).not.to.be.undefined;
    expect(element.v).to.equal(3);
  });

  it("When add() method called right value is given back", () => {
    const element = new calc(3).add(5);

    expect(element.v).to.equal(8);
  });

  it("When minus() method called right value is given back", () => {
    const element = new calc(3).minus(2);
    expect(element.v).to.equal(1);
  });

  it("When sqrt() method called right value is given back", () => {
    const element = new calc(4).sqrt();
    expect(element.v).to.equal(2);
  });

  it("When times() method called right value is given back", () => {
    const element = new calc(3).times(10);
    expect(element.v).to.equal(30);
  });

  it("When divide() method called right value is given back", () => {
    const element = new calc(10).divide(2);
    expect(element.v).to.equal(5);
  });

  it("When modulo() method called right value is given back", () => {
    const element = new calc(10).modulo(5);
    expect(element.v).to.equal(0);
  });

  it("Should give back error if divide is called with 0", () => {
    expect(() => new calc(4).divide(0)).to.throw();
  });

  it("Should give back error if sqrt is called with a base as a negative number", () => {
    expect(() => new calc(-3).sqrt()).to.throw();
  });

  it("Should able to do nested/mutiple method calls", () => {
    const element = new calc(3).add(4).minus(3).times(6);
    expect(element.v).to.equal(24);
  });
});
