import inquirer from "inquirer";
import chalk from "chalk";

let userColor = chalk.bgYellowBright(`Welcome To My Word Counter Game`);
console.log(userColor);

const Word_Counter: {
  sentence: string; // Using Property And Giving Type
} = await inquirer.prompt([
  {
    name: "sentence", 
    type: "input",
    message: "Enter Your Word And We Will Count The Words",
  },
]);

const User_Counter = Word_Counter.sentence.trim().split(" ");

console.log(`Your Word Is Here ${User_Counter.length}.`);
