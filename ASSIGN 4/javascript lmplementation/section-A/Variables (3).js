// Declaring and Using Variables Use var, let, and const to declare variables:

var oldVar = "I'm a var";
let newVar = "I'm a let";
const constantVar = "I can't be changed";
console.log(oldVar);
console.log(newVar);
console.log(constantVar);

// Basic Calculations (BMI Calculator, Temperature Converter) BMI Calculator:
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}
console.log(calculateBMI(70, 1.75)); // Example
// Temperature Converter:
function convertTemperature(temp, unit) {
    if (unit === 'C') {
        return (temp * 9/5) + 32;
        } else if (unit === 'F') {
            return (temp - 32) * 5/9;
            }
            return "Invalid unit";
            }
            console.log(convertTemperature(30, 'C')); // Example


            // Conditions (if-else, switch-case)

            let age = 20;
            if (age >= 18) {
                console.log("You are an adult.");
            } else {
                console.log("You are a minor.");
            }
// Switch-case statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
            case "Wednesday":
                console.log("Today is Wednesday");
                break;
                case "Thursday":
                    console.log("Today is Thursday");
                    break;
                    case "Friday":
                        console.log("Today is Friday");
                        break;
                        case "Saturday":
                            console.log("Today is Saturday");
                            break;
                            case "Sunday":
                                console.log("Today is Sunday");
                                break;
                                default:
                                    console.log("Invalid day");
                                    break;
                                    }


                                    // Loops (for, while, do-while)
                                 // Generate a dynamic list (Example: List of Numbers)
for(let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}





