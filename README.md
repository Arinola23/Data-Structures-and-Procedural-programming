PROBLEM 1
# Sum of Elements Calculator

Welcome to the Sum of Elements Calculator! This simple JavaScript function calculates the sum of distinct elements from two sets.

## Table of Contents

- [Introduction](#introduction)
- [Function](#function)
  - [Usage](#usage)

## Introduction

The Sum of Elements Calculator is a JavaScript function designed to find the sum of all distinct elements from two sets.

## Function

The main function in this project is `sumOfElements`, which takes two sets as input and returns the sum of distinct elements from both sets.

```javascript
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

Usage
To use the Sum of Elements Calculator, simply call the sumOfElements function with two sets:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const output = sumOfElements(set1, set2);

console.log("Output:", output);


PROBLEM 2
# Vector Orthogonality Checker

This JavaScript code provides a simple utility to check the orthogonality of pairs of vectors.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Algorithm Overview](#algorithm-overview)

## Introduction

Orthogonality is a key concept in linear algebra. This code checks if pairs of vectors are orthogonal by calculating their dot product. The dot product of orthogonal vectors is zero.

## Usage

1. **Clone the repository:**

    ```bash
    git clone <https://github.com/Arinola23/Data-Structures-and-Procedural-programming>
    ```

2. **Navigate to the project folder:**

    ```bash
    cd vector-orthogonality-checker
    ```

3. **Run the JavaScript code:**

    Open the provided JavaScript file ( `index.js`) and include it in your project. Then, use the functions according to your requirements.

4. **Example:**

    ```javascript
    // Include the algorithm file in your project
    const vectors = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
    ];

    determineOrthogonality(2, vectors);
    ```

## Algorithm Overview

The code uses a function (`dotProduct`) to calculate the dot product of two vectors and another function (`determineOrthogonality`) to check the orthogonality of n pairs of vectors. Different parameter passing types, including passing arrays, are demonstrated.

Feel free to modify and integrate this code into your projects as needed.
