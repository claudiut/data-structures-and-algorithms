/**
 * Splits the array reccursively in half until it reaches 1 element per half, then merges the halfs,
 * from bottom up, putin the values in order.
 *
 * O(n log(n)) running time. The only dissadvantage is it requires more memory because
 * it's keeping the sorted values in new arrays.
 */

const mergeSort = (inputArray: Array<number>, startIndex: number, endIndex: number) => {
    if (startIndex < endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        mergeSort(inputArray, startIndex, middleIndex);
        mergeSort(inputArray, middleIndex + 1, endIndex);
        merge(inputArray, startIndex, middleIndex, endIndex);
    }
};

const merge = (inputArray: Array<number>, startIndex: number, middleIndex: number, endIndex: number) => {
    let half1Index = startIndex;
    let half2Index = middleIndex + 1;

    const tempSortedArray = [];

    while (half1Index <= middleIndex || half2Index <= endIndex) {
        const half1Ended = half1Index === middleIndex + 1;
        const half2Ended = half2Index === endIndex + 1;

        if (!half1Ended && (inputArray[half1Index] <= inputArray[half2Index] || half2Ended)) {
            tempSortedArray.push(inputArray[half1Index]);
            half1Index++;
            continue;
        }

        if (!half2Ended && (inputArray[half2Index] <= inputArray[half1Index] || half1Ended)) {
            tempSortedArray.push(inputArray[half2Index]);
            half2Index++;
        }
    }

    let tempSortedArrayIndex = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        inputArray[i] = tempSortedArray[tempSortedArrayIndex];
        tempSortedArrayIndex++;
    }
};

const input = [6, 7, 0, 3, -2, 9, 12, 3, 2];
mergeSort(input, 0, input.length - 1);
console.log(JSON.stringify(input));

export { };