// TODO: Create an array called numbers with values 1 through 5

let numbers = [1, 2, 3, 4, 5]

// TODO: Write a for loop that prints each number in the array

console.log("Each number in array.numbers:");

for (let number = 1; number <= numbers.length; number++) {
    const element = numbers[number]
    console.log(number)
}

// TODO: Write a while loop that counts down from 5 to 1

console.log("Countdown from 5:");

let count = 5

while (count >= 1) {
    console.log (count)
    count--
    }

// TODO: Create a loop that prints only even numbers from the numbers array

console.log("Even numbers form array.RandomNumbers:")

let RandomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let even = 2; even <= RandomNumbers.length; even+=2) {
    const element = RandomNumbers[even]
    console.log(even)
}

// TODO: Create a loop that calculates the sum of all numbers in the array

console.log("Sum of numbers form array.RandomNumbers:")

let sum = 0
let i = 0

while (i < RandomNumbers.length) {
    sum += RandomNumbers[i]
    i++
    console.log(sum)
}