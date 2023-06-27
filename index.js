const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const {Circle, Triangle, Square} = require('./lib/shapes');
inquirer
  .prompt([
    {
      type: "input",
      name: "logo",
      message:"Choose three characters that will be displayed in your logo",
      validate: (x) => {
        const logoRegex = /^[A-Z0-9]{2,3}$/;
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

  console.log(answers.colors);
  let colors;
  switch (answers.colors) {
    case 'blue' :
    shape = new colors()
    break;
    
    case 'orange' :
    shape = new colors()
    break;

    case 'purple' :
    shape = new colors()
    break;

    case 'yellow' :
    shape = new colors()
    break;  
  }

})

    console.log(answers);
    fs.writeFile('logo.svg', JSON.stringify(answers), (error) => {
        error ? console.log(error) : console.log('Logo.svg generated successfully');
    })
  
