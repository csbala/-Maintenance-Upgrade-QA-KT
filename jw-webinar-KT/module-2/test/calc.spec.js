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

  it("Should have stored v as decimal number", () => {
    const element = new calc(3.4);

    expect(element.v).not.to.be.undefined;
    expect(element.v).to.equal(3.4);
  });

  it("When add() method is called, the right value is given back", () => {
    const element = new calc(3).add(5);

    expect(element.v).to.equal(8);
  });

  it("When add() method called with decimal number, the right value is given back", () => {
    const element = new calc(3).add(5.5);

    expect(element.v).to.equal(8.5);
  });

  it("When minus() method is called, right value is given back", () => {
    const element = new calc(3).minus(2);
    expect(element.v).to.equal(1);
  });

  it("When minus() method is called with decimal number, right value is given back", () => {
    const element = new calc(3.0).minus(2.1);
    expect(element.v).to.equal(0.9);
  });

  it("When sqrt() method is called, the right value is given back", () => {
    const element = new calc(4).sqrt();
    expect(element.v).to.equal(2);
  });

  it("When sqrt() method is called with decimal number, the right value is given back", () => {
    const element = new calc(4.4).sqrt();
    expect(element.v).to.equal(2.0976176963403033);
  });

  it("When times() method is called, the right value is given back", () => {
    const element = new calc(3).times(10);
    expect(element.v).to.equal(30);
  });

  it("When times() method is called with decimal number, the right value is given back", () => {
    const element = new calc(3).times(10.5);
    expect(element.v).to.equal(31.5);
  });

  it("When divide() method is called, the right value is given back", () => {
    const element = new calc(10).divide(2);
    expect(element.v).to.equal(5);
  });

  it("When divide() method called with decimal number, the right value is given back", () => {
    const element = new calc(10).divide(0.5);
    expect(element.v).to.equal(20);
  });

  it("When modulo() method is called, the right value is given back", () => {
    const element = new calc(10).modulo(5);
    expect(element.v).to.equal(0);
  });

  it("When modulo() method is called with a decimal number, the right value is given back", () => {
    const element = new calc(10).modulo(0.5);
    expect(element.v).to.equal(0);
  });

  it("Should give back error if calc() is called without parameter", () => {
    expect(() => new calc()).to.throw();
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
