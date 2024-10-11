// Step 1
function greet(name = "Jerry"){
    return "Hello " + name + "!";
 };

// Step 2
console.log("Step 2 - Default");
console.log(greet());
console.log("Step 2 - With Input");
console.log(greet("Bob"));

// Step 3

let addNumbers = (x, y) => {
    return x + y
};
console.log("Step 3");
console.log(addNumbers(4,5));

// Step 4

let globalVar = "I'm the same :)";
let testVar = "Same";

function changeValue(){
    testVar = "Different";
    let globalVar = "I've changed :( ";
    return globalVar + testVar;
};
console.log("Step 4");
console.log(changeValue());
console.log(globalVar);
console.log(testVar);

// Step 5
console.log("Step 5");
function outerFunction() {
    let homeless = true;
    let blocks = 5;
    function innerFunction() {
        if (homeless){
            console.log("I coded a little house out of for loops that worked in the VS code terminal but it seems that process.stdout.write() doesn't work in the browser terminal (or I couldn't figure out how to make it work at least).");
            console.log("So, you are seeing this text instead. The house look a long time to make so instead of deleting it I just put it behind a conditional.");
            console.log("Feel free to set homeless to false in VS code if you want to see it.");
        }
        else {
            console.log("Welcome to the House of Secrets!");
            console.log("How did you get here?");
            for (let i = 0; i < blocks; i++) {
                for (let n = blocks - 1; n > i; n--)
                    {
                    process.stdout.write(" ");
                    };
                for (let k = 0; k <= i; k++) {
                    process.stdout.write("#");
                };
                for (let k = 0; k <= i; k++) {
                    process.stdout.write("#");
                };
                console.log(" ");
            };
            for (let m = 0; m < blocks; m++) {
                for (let j = 1; j <= blocks; j++) {
                    process.stdout.write("##");
                };
                console.log(" ");
            };
            console.log("I hope you enjoyed your stay!");
        };
        
    };
    return innerFunction;
};
let closedHouse = outerFunction();
closedHouse();