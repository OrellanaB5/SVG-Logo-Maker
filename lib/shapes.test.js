const { Circle, Triangle, Square } = require('./shapes');

describe('SVG Shape Generation', () => {
  it('Circle class should render a circle SVG element with correct color', () => {
    const circle = new Circle('red');
    const svg = circle.render('A', 'white');
    expect(svg).toMatch(/<circle.*fill="red"/);
    expect(svg).toMatch(/<text.*fill="white"/);
    expect(svg).toMatch(/A<\/text>/);
  });

  it('Triangle class should render a polygon SVG element representing a triangle with correct color', () => {
    const triangle = new Triangle('blue');
    const svg = triangle.render('B', 'black');
    expect(svg).toMatch(/<polygon.*fill="blue"/);
    expect(svg).toMatch(/<text.*fill="black"/);
    expect(svg).toMatch(/B<\/text>/);
  });

  it('Square class should render a rect SVG element representing a square with correct color', () => {
    const square = new Square('green');
    const svg = square.render('C', 'yellow');
    expect(svg).toMatch(/<rect.*fill="green"/);
    expect(svg).toMatch(/<text.*fill="yellow"/);
    expect(svg).toMatch(/C<\/text>/);
  });
});
