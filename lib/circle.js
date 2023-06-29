const Shape = require('./shapes');
class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
      
      </svg>`
    }
}
module.exports = Circle