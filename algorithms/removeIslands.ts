// matrix/image with white & black pixels
// remove the pixels that are not connected to the border vertically or horizontally
const input = [
    [1, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
];

const isNotBorder = (i: number, j: number, rows: number, cols: number) => (
    i > 0 && j > 0 && i < rows - 1 && j < cols - 1
);

const cloneZero = (inputMatrix: number[][]) => {
    const output = [];
    for (const i in inputMatrix) {
        output[i] = [];
        for (const j in inputMatrix[i]) {
            output[i].push(0)
        }
    }
    return output;
}

const getNeightbourCoords = (i: number, j: number) => ([
    // top
    [i - 1, j],
    // right
    [i, j + 1],
    // bottom
    [i + 1, j],
    // left
    [i, j - 1],
]);

const traverseAndMarkAdiacentStartingFrom = (i: number, j: number, input: number[][], output: number[][]) => {
    // don't do anything if input value isn't 1 or if already visited this 1-node
    if (input[i]?.[j] !== 1 || output[i][j] === 1) {
        return;
    }

    output[i][j] = 1;

    // traverse all neighbours if didn't already
    getNeightbourCoords(i, j).forEach((coords) => {
        const [x, y] = coords;
        traverseAndMarkAdiacentStartingFrom(x, y, input, output);
    });
}

// Solution:
// 1. navigate over the borders
// 2. from there navigate over all adiacent pixels, recursively. (the already visited (new matrix) should not be revisited)
// 3. record their coordinates inside another 0-filled matrix
const removeIslands = (input: Array<Array<number>>) => {
    const rows = input.length;
    const cols = input[0].length;

    const output = cloneZero(input);

    // navigate over the border
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (isNotBorder(i, j, cols, rows)) {
                continue;
            }

            traverseAndMarkAdiacentStartingFrom(i, j, input, output);
        }
    }

    return output;
}

console.log('Removed islands. The edges:', removeIslands(input));;