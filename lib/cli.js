const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

class CLI {
    async run() {
        try {
            const answers = await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the text you would like to display on the shape (UP TO 3 CHARACTERS).",
                    name: "textInput",
                    validate: input => input.length <= 3 || "Text must be up to 3 characters."
                },
                {
                    type: "input",
                    message: "Please enter the text color you would like to use (color keyword OR a hexadecimal number).",
                    name: "textColor",
                    validate: input => /^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$|^[\w]+$/.test(input) || "Please enter a valid color keyword or hexadecimal value."
                },
                {
                    type: "list",
                    message: "Please choose which shape you would like to display.",
                    name: "shape",
                    choices: ["Circle", "Triangle", "Square"],
                },
                {
                    type: "input",
                    message: "Please choose the color of the shape (color keyword OR a hexadecimal number).",
                    name: "shapeColor",
                    validate: input => /^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$|^[\w]+$/.test(input) || "Please enter a valid color keyword or hexadecimal value."
                },
            ]);

            let shapeInstance;
            switch (answers.shape) {
                case 'Circle':
                    shapeInstance = new Circle(answers.textInput, answers.textColor, answers.shapeColor);
                    break;
                case 'Triangle':
                    shapeInstance = new Triangle(answers.textInput, answers.textColor, answers.shapeColor);
                    break;
                case 'Square':
                    shapeInstance = new Square(answers.textInput, answers.textColor, answers.shapeColor);
                    break;
                default:
                    throw new Error("Unsupported shape type");
            }

            const svgContent = shapeInstance.render();
            fs.writeFileSync('logo.svg', svgContent);
            console.log("Successfully generated logo.svg file!");
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

module.exports = CLI;
