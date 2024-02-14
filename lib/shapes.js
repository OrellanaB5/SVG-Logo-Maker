class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      return `<polygon points="150,20 50,180 250,180" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render(text, textColor) {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  

