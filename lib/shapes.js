class Shape {
    constructor(textInput, textColor, shape, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(textInput, textColor, shapeColor) {
        super(textInput, textColor, 'circle', shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
            <text x="150" y="105" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(textInput, textColor, shapeColor) {
        super(textInput, textColor, 'triangle', shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
            <text x="150" y="105" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>`;
    }
}

class Square extends Shape {
    constructor(textInput, textColor, shapeColor) {
        super(textInput, textColor, 'square', shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />
            <text x="150" y="105" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };

