//PROBLEM 1
//Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give a solutions to this problem, using arrays

//SOLUTION 1    
function sumOfElements(set1, set2) {
    // Initialize sum
    let sum = 0;

    // Add elements from set1 that are not present in set2
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sum += set1[i];
        }
    }

    // Add elements from set2 that are not present in set1
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sum += set2[i];
        }
    }

    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const output = sumOfElements(set1, set2);

console.log("Output:", output);


//PROBLEM 2
// Write an algorithm that fulfill the following: 

// Name: Dot product
// Description:
// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

//SOLUTION:
// Function to calculate dot product and store it in a variable
function dotProduct(v1, v2, resultArray) {
    resultArray[0] = 0; // Storing the result in the provided array
    // Assuming v1 and v2 have the same length
    for (let i = 0; i < v1.length; i++) {
        resultArray[0] += v1[i] * v2[i];
    }
}

// Algorithm to determine orthogonality of n pairs of vectors using nested loops
function determineOrthogonality(n, vectors) {
    for (let pair = 0; pair < n; pair++) {
        const v1 = vectors[pair * 2];
        const v2 = vectors[pair * 2 + 1];
        
        // Array to store the result of dot product
        const resultArray = [];

        // Call the function with different types of parameter passing
        dotProduct(v1, v2, resultArray);

        // Access the result from the array
        const result = resultArray[0];

        if (result === 0) {
            console.log(`Vectors ${pair * 2} and ${pair * 2 + 1} are orthogonal.`);
        } else {
            console.log(`Vectors ${pair * 2} and ${pair * 2 + 1} are not orthogonal.`);
        }
    }
}

// Example usage with the function
const vectors = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
];

determineOrthogonality(2, vectors);

