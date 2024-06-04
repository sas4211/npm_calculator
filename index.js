#! /usr/bin/env node
import inquirer from "inquirer";
//// user input
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter first number :"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number :",
    },
    {
        name: "operator",
        type: "list",
        message: "Choose an operator :",
        choices: ["+", "-", "*", "/"]
    }
]);
/// variable decleration
let number1 = answers.num1;
let number2 = answers.num2;
let opt = answers.operator;
///console.log(number1);
///console.log(number2);
///console.log(opt);
/// conditional statment
if (opt === "+") {
    console.log(`The result is :  (${number1} ${opt} ${number2} = (${number1 + number2}))`);
}
else if (opt === "-") {
    console.log(`The result is :  (${number1} ${opt} ${number2} = (${number1 - number2}))`);
}
else if (opt === "*") {
    console.log(`The result is :  (${number1} ${opt} ${number2} = (${number1 * number2}))`);
}
else if (opt === "/") {
    if (number2 === (0)) {
        console.log("Error! Division by zero is not allowed.");
    }
    else {
        console.log(`The result is :  (${number1} ${opt} ${number2} = (${number1 / number2}))`);
    }
}
