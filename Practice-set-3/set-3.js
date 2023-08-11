// Practice Set 3:
// 1. Write a program to print the marks of  student in an object using for loop


// 2. Write a program to print "Better luck next Time" until the user enters the correct no.
function luck(){
    const random = 7;
    let number = parseInt(prompt("check your luck:"));
    while(number !== random) {
        number = parseInt(prompt("Better Luck Next Time"));
    }
    if(number == random){
        console.log("You guess the right number" + random)
    }
}
console.log(luck())

// 3. Write a function to find mean of 5 numbers
