/*
Selection sort "selects" which number is smallest of the unsorted values, from left ro right. After we scanned the unsorted part and found the smallest one we swap it with the 1st element of the unsorted part to bring it to the sorted part. Then we do that same to the remaining of the slice (from the next value to last).

O(n ^ 2) algo

Note: yes, it mutates the inputs which is not good in fn but has a better performance for a big input */
const sortBySelection = (inputArray: Array<number>): Array<number> => {
    if (inputArray.length < 2) {
        return inputArray;
    }

    for (let i = 0; i < inputArray.length - 1; i++) {
        // we suppose the minimum is at i, until we find a smaller value
        let indexOfMinimum = i;
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[j] < inputArray[indexOfMinimum]) {
                indexOfMinimum = j;
            }
        }

        // if indeed we found another minimum, we bring it to the beginning of the unsorted part
        if (indexOfMinimum !== i) {
            const valueAtI = inputArray[i];
            inputArray[i] = inputArray[indexOfMinimum];
            inputArray[indexOfMinimum] = valueAtI;
        }
    }
};

const input = [5, 4, 19, 100, 40, 2, 4];
sortBySelection(input);
console.log(JSON.stringify(input));

export { };