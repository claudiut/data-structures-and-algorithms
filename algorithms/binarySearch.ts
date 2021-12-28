/**
 * A divide-and-conquer search algorithm. Finds a specific value out of n sorted input values by dividing
 * the inputs in 2 each time.
 *
 * O(log n) running time
 */

const binarySearch = (
    searchValue: number,
    sortedInput: Array<number>,
    startIndex: number = 0,
    endIndex: number = sortedInput.length - 1
): number | null => {
    // no value left for checking, so nothing has been found
    if (startIndex > endIndex) {
        return null;
    }

    // keep the offset (startIndex) in mind, since the startIndex is not always 0
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (searchValue === sortedInput[middleIndex]) {
        return middleIndex;
    }

    if (searchValue > sortedInput[middleIndex]) {
        return binarySearch(searchValue, sortedInput, middleIndex + 1, endIndex);
    }

    if (searchValue < sortedInput[middleIndex]) {
        return binarySearch(searchValue, sortedInput, startIndex, middleIndex - 1);
    }
}

const n = 7;
const input = [-23, -4, 0, 6, 7, 8, 12, 100, 101, 103, 110];

console.log(`Binary search ${n} inside ${input}. Index =`, binarySearch(n, input));

export {};