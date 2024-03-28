#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 1000; //Dollar
let myPin = 123;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your option",
            type: "list",
            choices: ["withdraw", "check Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is :" + myBalance);
    }
    else if (operationAns.operation == "check Balance") {
        console.log("Your current balance is:" + myBalance);
    }
}
else {
    console.log("Pin is wrong");
}
