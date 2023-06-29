const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
inquirer
  .prompt([
    {
      type: "input",
      name: "logo",
      message:"Choose three characters that will be displayed in your logo",
      validate: (x) => {
        const logoRegex = /^[A-Za-zf0-9]{2,3}$/;
         const validator = x.match(logoRegex);
         console.log('x='+x);
         console.log('validator='+validator);
         if(validator) {
            return true;
         } 
         return 'Please choose a valid character'
      }
    },
    {
      type: "list",
      name: "shape",
      message: "What shape do you like?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "colors",
      message: "What color do you like?", 
      validate: (x) => {
        const validColors = ['orange', 'blue', 'purple', 'yellow'];
        for (var i = 0; i < validColors.length; i++) {
          if (validColors[i] === x) {
            return true;
          }
      }
      return 'Please choose a valid color'     
     }  
    },
  ])
  .then(answers => {
console.log(answers.shape);
let shape;
switch (answers.shape) {
  case 'triangle': 
  shape = new Triangle()
  break;
  
  case 'circle' :
  shape = new Circle()
  break;
  
  case 'square':
  shape = new Square()
  break;  
}
shape.setColor(answers.colors);
  console.log(answers.colors);
shape.setText(answers.logo)
  console.log(answers);
  writeFile('logo.svg',(shape.render()), (error) => {
      error ? console.log(error) : console.log('Logo.svg generated successfully');
  })
})
module.exports = {
  
}