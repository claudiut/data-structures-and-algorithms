const mergeSort = (inputArray: Array<number>, startIndex: number, endIndex: number): Array<number> => {
    if (startIndex < endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const sortedHalf1 = mergeSort(inputArray, startIndex, middleIndex);
        const sortedHalf2 = mergeSort(inputArray, middleIndex + 1, endIndex);
        return merge(sortedHalf1, sortedHalf2);
    }

    return [inputArray[startIndex]];
};

const merge = (array1: Array<number>, array2: Array<number>): Array<number> => {
    let array1CurrentIndex = 0;
    let array2CurrentIndex = 0;

    const sortedArray = [];

    // loop until both arrays have been evaluated/traversed
    while (array1CurrentIndex < array1.length || array2CurrentIndex < array2.length) {
        // we mark an array as evaluated when the last index has been evaluated in the previous loop
        const array1Finished = array1CurrentIndex === array1.length;
        const array2Finished = array2CurrentIndex === array2.length;
        const currentLeftValue = array1[array1CurrentIndex];
        const currentRightValue = array2[array2CurrentIndex];

        if (!array1Finished && (currentLeftValue <= currentRightValue || array2Finished)) {
            sortedArray.push(currentLeftValue);
            array1CurrentIndex++;
            continue;
        }

        if (!array2Finished && (currentRightValue <= currentLeftValue || array1Finished)) {
            sortedArray.push(currentRightValue);
            array2CurrentIndex++;
        }
    }

    return sortedArray;
};

const input = [6, 7, 0, 3, -2, 9, 12, 3, 2];
console.log(
    JSON.stringify(
        mergeSort(input, 0, input.length - 1)
    )
);