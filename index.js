setOfNumbers = parseInt(prompt('Please, enter how many numbers do you want to use in the range from 4 to 10'));

inputArray = [];

for (i = 0; i < setOfNumbers; i++) {
    inputArray[i] = parseInt(prompt('Please, enter your number ' + (i+1)));
}

sortingOrder = (inputArray) => {
    for (i = 1; i < inputArray.length; i++) {
        for (j = 0; j < i; j++) {
            if (inputArray[i] < inputArray[j]) {
                x = inputArray[i]
                inputArray[i] = inputArray[j]
                inputArray[j] = x
            }
        }
    }
    return inputArray;
}
result = sortingOrder(inputArray);
console.log(result);

document.write(`The numbers are : ${inputArray}`);
document.write(`<br>The numbers in asceeding order are : ${result}`);
document.write(`<br>The numbers which are removed are : ${inputArray.splice(2, 3)}`);
document.write(`<br>After removing, the numbers will be : ${inputArray}`);

// console.log(inputArray);
// console.log(result);
// console.log(inputArray.splice(2, 3));
// console.log(inputArray);