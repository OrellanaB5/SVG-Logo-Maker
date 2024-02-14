const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) =>
      input.length <= 3 ? true : 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeInstance;

  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle(shapeColor);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(shapeColor);
      break;
  }

  const svgContent = generateSVG(shapeInstance, text, textColor);

  const dir = './examples';
  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, 'logo.svg');

  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated logo.svg in the ${dir} directory.`);
});

function generateSVG(shape, text, textColor) {
  const svgStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  const svgShape = shape.render(text, textColor);
  const svgEnd = `</svg>`;
  return `${svgStart}${svgShape}${svgEnd}`;
}
