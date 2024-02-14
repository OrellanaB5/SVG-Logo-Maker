const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
    it("should render a red circle in svg", () => {
        const circle = new Circle("HEY", "black", "circle", "red");
        expect(circle.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="red" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="black">HEY</text></svg>`);
    });
});

describe("Triangle", () => {
    it("should render a blue triangle in svg", () => {
        const triangle = new Triangle("WOW", "green", "triangle", "blue");
        expect(triangle.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><triangle points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="green">WOW</text></svg>`);
    });
});

describe("Square", () => {
    it("should render a yellow square in svg", () => {
        const square = new Square("HAH", "blue", "square", "yellow");
        expect(square.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><square x="90" y="40" width="120" height="120" fill="yellow" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="blue">HAH</text></svg>`);
    });
});