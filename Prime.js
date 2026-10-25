 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {

    // Check if the number is less than or equal to 1
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }

    // Check for factors from 2 up to num - 1
    for (let i = 2; i < num; i++) {

        // If the number is divisible by i, it is not prime
        if (num % i === 0) {
            return false;
        }
    }

    // If no factors are found, the number is prime
    return true;
};

// Store the number to be checked
let number = 17;

// Check whether the number is prime and display the result
if (isPrime(number)) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}
module.exports = isPrime;
