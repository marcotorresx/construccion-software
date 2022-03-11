// Q1
function firstDontRepeat(str) {
    // Create map to store the amount of letters
    const lettersCounter = new Map([]);
    // Get amounts
    for (let i = 0; i < str.length; i++) {
        const curAmount = lettersCounter[str[i]];
        lettersCounter[str[i]] = (curAmount == undefined) ? 1 : curAmount + 1;
    }
    // Get the first letter with 1 rep
    for (let i = 0; i < str.length; i++) {
        if (lettersCounter[str[i]] == 1) {
            return str[i]
        }
    }
}
console.log()
console.log("--- Q1 ---");
console.log(firstDontRepeat("abacddbecf"));
console.log(firstDontRepeat("ccbbsddi"));
console.log(firstDontRepeat("onnll"));

// Q2
function bubbleSort(arr) {
    // Iterate all the numbers exept last one
    for (let i = 0; i < arr.length - 1; i++) {
        // Iterate numbers but for each loop finish one before
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If the the left one is bigger than the right one
            if (arr[j] > arr[j + 1]) {
                // Swap numbers
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log()
console.log("--- Q2 ---");
console.log(bubbleSort([5, 2, 9, 1]));
console.log(bubbleSort([4, 3, 2, 1]));
console.log(bubbleSort([4, 2, 5, 9]));

// Q3
const mergeArrays = (a, b) => {
    // Create array to store the values of both arrays
    const complelteArr = [];
    // While both arrs sill have elements
    while (a.length && b.length) {
        // Push the smallest value
        const smallest = a[0] > b[0] ? b.shift() : a.shift();
        complelteArr.push(smallest);
    }
    // Add the rest of the values to the completeArr
    while (a.length) {
        complelteArr.push(a.shift())
    }
    while (b.length) {
        complelteArr.push(b.shift())
    }
    return complelteArr
}

const mergeSort = (arr) => {
    // If there is 0 or 1 numbers 
    if (arr.length < 2) return arr;

    // Get the middle of the array
    const m = Math.floor(arr.length / 2);

    // Get left and right arrays
    const leftArr = arr.slice(0, m);
    const rightArr = arr.slice(m, arr.length);

    // Sort each array
    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);

    // Merge the arrays
    return mergeArrays(leftSorted, rightSorted);
}
console.log()
console.log("--- Q3 ---");
console.log(mergeSort([5, 2, 9, 1]));
console.log(mergeSort([4, 3, 2, 1]));
console.log(mergeSort([4, 2, 5, 9]));

// Q4
function reverse(arr) {
    newArr = [];
    // Iterate in reverse order and push to new array
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}
console.log()
console.log("--- Q4 ---");
console.log("Reverse: ");
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([8, 4, 3, 1]));
console.log(reverse(['a', 'b', 'c']));

function reverseModify(arr) {
    // Get the middle index
    const m = Math.floor(arr.length / 2);
    // Iterate until the middle
    for (let i = 0; i < m; i++) {
        // Get first and last elements
        const first = arr[i];
        const last = arr[arr.length - 1 - i];
        // Delete last and add first
        arr.splice(arr.length - 1 - i, 1, first);
        arr.splice(i, 1, last);
    }
    return arr
}
console.log("Reverse Modify: ");
console.log(reverseModify([1, 2, 3, 4]));
console.log(reverseModify([8, 4, 3, 1]));
console.log(reverseModify(['a', 'b', 'c']));

// Q5
class Vector {
    // Constructor
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // Sum with other vector
    vectorSum(v2) {
        const xRes = this.x + v2.x;
        const yRes = this.y + v2.y;
        const zRes = this.z + v2.z;
        return `(${xRes},${yRes},${zRes})`;
    }
    // Substract with other vector
    vectorSubstract(v2) {
        const xRes = this.x - v2.x;
        const yRes = this.y - v2.y;
        const zRes = this.z - v2.z;
        return `(${xRes},${yRes},${zRes})`;
    }
    // Get magnitud
    getMagnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2).toFixed(2);
    }
    // Get unitary vector
    unitaryVector() {
        // Get magnitude
        const magnitude = this.getMagnitude();
        // Divide each vector with the magnitude
        const unitaryX = this.x / magnitude;
        const unitaryY = this.y / magnitude;
        const unitaryZ = this.z / magnitude;
        return `(${unitaryX.toFixed(2)},${unitaryY.toFixed(2)},${unitaryZ.toFixed(2)})`;
    }
    // Scalar product
    scalarProduct(v2) {
        return this.x * v2.x + this.y * v2.y + this.z * v2.z
    }
}
const v1 = new Vector(5, 2, 3);
const v2 = new Vector(2, 6, 1);
const v3 = new Vector(7, 1, 4);
console.log()
console.log("--- Q5 ---");
console.log("Vector Sum:")
console.log(v1.vectorSum(v2));
console.log(v2.vectorSum(v3));
console.log(v3.vectorSum(v1));
console.log("Vector Substract:")
console.log(v1.vectorSubstract(v2));
console.log(v2.vectorSubstract(v3));
console.log(v3.vectorSubstract(v1));
console.log("Get Magnitude:")
console.log(v1.getMagnitude());
console.log(v2.getMagnitude());
console.log(v3.getMagnitude());
console.log("Get Unitary Vector:")
console.log(v1.unitaryVector());
console.log(v2.unitaryVector());
console.log(v3.unitaryVector());
console.log("Get Scalar Product:")
console.log(v1.scalarProduct(v2));
console.log(v2.scalarProduct(v3));
console.log(v3.scalarProduct(v1));

// Q6
function gcd(x, y) {
    // Its a recursive function, if there is no y then return x
    if (!y) return x;
    // Else execute the same function but with the modudle of x and y
    else return gcd(y, x % y);
}
console.log()
console.log("--- Q6 ---");
console.log(gcd(20, 15));
console.log(gcd(5, 10));
console.log(gcd(30, 5));

// Q7
function verifyOrthogonals(v1, v2) {
    // Get the scalar product of the vectors
    const res = v1.scalarProduct(v2);
    // If res is 0 they are orthogonals
    return res == 0 ? true : false;
}
const v4 = new Vector(0, 0, 1);
const v5 = new Vector(0, 1, 0);
const v6 = new Vector(1, 1, 1);
console.log()
console.log("--- Q7 ---");
console.log(verifyOrthogonals(v4, v5));
console.log(verifyOrthogonals(v5, v6));
console.log(verifyOrthogonals(v6, v4));

// Q8 
function hackerSpeak(str) {
    // Map to store the letters and values
    const letterCodes = new Map();
    letterCodes.set('a', 4);
    letterCodes.set('s', 5);
    letterCodes.set('e', 3);
    letterCodes.set('o', 0);
    letterCodes.set('i', 1);
    // Iterate each letter that has to be changed
    letterCodes.forEach((value, key) => {
        str = str.replaceAll(key, value) // Replace letter with value
    })
    return str
}
console.log()
console.log("--- Q8 ---");
console.log(hackerSpeak("Javascript es divertido"));
console.log(hackerSpeak("Hola me llamo Marco Torres"));
console.log(hackerSpeak("Se leer y escribir"));

// Q9
function getFactors(n) {
    // Create array to store the factors
    let factors = [];
    // Iterate until the squre root of n
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); ++i) {
        // If the waste is 0 then we add the factor
        if (n % i == 0) {
            factors.push(i);
            // If the quotient of n with i is diferent from i, push the quotient
            if (n / i !== i) {
                factors.push(n / i);
            }
        }
    }
    // Sort the factors array
    factors.sort((a, b) => a - b);
    return factors;
}
console.log()
console.log("--- Q9 ---");
console.log(getFactors(5));
console.log(getFactors(10));
console.log(getFactors(12));

// Q10
function removeDuplicates(arr) {
    // Create a set of numbers
    const uniqueNumbers = new Set();
    // Iterate the array and add numbers to set
    arr.forEach(n => uniqueNumbers.add(n));
    // Create new output array
    const output = [];
    uniqueNumbers.forEach(n => output.push(n));
    return output;
}
console.log()
console.log("--- Q10 ---");
console.log(removeDuplicates([0, 1, 0, 1, 1, 3, 3]));
console.log(removeDuplicates([3, 3, 4, 5, 6]));
console.log(removeDuplicates([1, 2, 2, 3, 3]));