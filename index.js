import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("\n\t***************", chalk.magentaBright.underline("SWITCH CASE"), "****************\n"));
const answer = await inquirer.prompt([
    {
        message: chalk.greenBright.underline("Enter Number of Month"),
        type: "Number",
        name: "Month",
    },
]);
// Switch Case :
switch (true) {
    case answer.Month == 1:
        console.log(chalk.magentaBright.underline("\n\t'January'", chalk.yellow.underline("\n\t\t***Sameer Birthday Month is January:***")));
        break;
    case answer.Month == 2:
        console.log(chalk.magentaBright.underline("\n\t'February'", chalk.redBright.underline("\n\t\t***Sarim Birthday Month is February:***")));
        break;
    case answer.Month == 3:
        console.log(chalk.magentaBright.underline("\n\t'March'", chalk.blueBright.underline("\n\t\t***Zunaira Birthday Month is March:***")));
        break;
    case answer.Month == 4:
        console.log(chalk.magentaBright.underline("\n\t'April'", chalk.yellowBright.underline("\n\t\t***HUzaifa Birthday Month is April:***")));
        break;
    case answer.Month == 5:
        console.log(chalk.magentaBright.underline("\n\t'May'", chalk.redBright.underline("\n\t\t***Zarnish Birthday Month is May:***")));
        break;
    case answer.Month == 6:
        console.log(chalk.magentaBright.underline("\n\t'june'", chalk.blueBright.underline("\n\t\t***Umer Birthday Month is June :***")));
        break;
    case answer.Month == 7:
        console.log(chalk.magentaBright.underline("\n\t'July'", chalk.yellowBright.underline("\n\t\t***Husnain Birthday Month is July:***")));
        break;
    case answer.Month == 8:
        console.log(chalk.magentaBright.underline("\n\t'August'", chalk.redBright.underline("\n\t\t***Faisal Birthday Month is August:***")));
        break;
    case answer.Month == 9:
        console.log(chalk.magentaBright.underline("\n\t'September'", chalk.blueBright.underline("\n\t\t***Iqra Birthday Month is September:***")));
        break;
    case answer.Month == 10:
        console.log(chalk.magentaBright.underline("\n\t'October'", chalk.yellowBright.underline("\n\t\t***Hassan Birthday Month is October:***")));
        break;
    case answer.Month == 11:
        console.log(chalk.magentaBright.underline("\n\t'November'", chalk.redBright.underline("\n\t\t***Hamza Birthday Month is November:***")));
        break;
    case answer.Month == 12:
        console.log(chalk.magentaBright.underline("\n\t'December'", chalk.blueBright.underline("\n\t\t***Hafsa Birthday Month is December:***")));
        break;
    default: // code Block
        console.log(chalk.redBright.underline("\n\t\tInvalid Number"));
        break;
}
