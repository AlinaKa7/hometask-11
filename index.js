setOfNumbers = parseInt(prompt('Please, enter how many numbers do you want to use in the range from 4 to 10'));

inputArray = [];

for(i = 0; i < setOfNumbers; i++) {
    inputArray[i] = parseInt(prompt('Please, enter your number ' + (i+1)));
}

document.write(`The numbers are : ${inputArray}`);
document.write(`<br>The numbers in asceeding order are : ${inputArray.sort()}`);
document.write(`<br>The numbers which are removed are : ${inputArray.splice(2, 3)}`);
document.write(`<br>After removing, the numbers will be : ${inputArray}`);

// console.log(inputArray);
// console.log(inputArray.sort());
// console.log(inputArray.splice(2, 3));
// console.log(inputArray);