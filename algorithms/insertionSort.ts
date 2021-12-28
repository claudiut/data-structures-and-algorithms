/**
 * Inserts the element inside the sorted part, scanning the sorted part from right to left.
 * Initially, the sorted part contains only the first element.
 * (I think the advantage is that the elements that are already sorted will not be compared uncessarily.)
 *
 * O(n^2) algo
 */

// Basically looks back from i-1 to 0 and swaps the i element with its left elements, one by one,
// until it's sorted (falls into the right place)
// So the growing left-side is sorted and the shrinking right-side gets inserted one by one in the left
// Since the left side is sorted, once a new element is inserted in the correct place, there's
// no need to do further checks in its left neighbours
const sortByInsertion = (inputArray: Array<number>): Array<number> => {
    if (inputArray.length < 2) {
        return inputArray;
    }

    for (let i = 1; i < inputArray.length; i++) {
        let j = i - 1;
        // swap the unsorted value with the sorted one until we hit a sorted value that's lower
        while (j >= 0 && inputArray[j + 1] < inputArray[j]) {
            const unsortedValue = inputArray[j + 1];
            inputArray[j + 1] = inputArray[j];
            inputArray[j] = unsortedValue;
            j--;
        }
    }
};

const input = [5, 4, 19, 100, 40, 2, 4];
sortByInsertion(input);
console.log(JSON.stringify(input));

export { };