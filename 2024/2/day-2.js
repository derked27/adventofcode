const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main(params) {
    const filePath = path.join(__dirname, '../input/day-2');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    let safeNumberOfReports = 0;
    for await (const line of readLine) {
        const numberArray = line.split(' ').map(Number);
        const isSafe = checkSafeList(numberArray);
        if (isSafe)
            safeNumberOfReports++;

    }
    console.log(safeNumberOfReports);
}

function checkSafeList(numberArray, removeCount = 0) {
    if (removeCount > 1)
        return false;
    let isIncreasing = false;
    if (numberArray[0] == numberArray[1])
        isIncreasing = numberArray[2] > numberArray[1];
    else
        isIncreasing = numberArray[1] > numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        let isRowSafe = isSafe(numberArray, i, isIncreasing);
        if (!isRowSafe) {
            removeCount++;
            // remove left
            let leftList = [...numberArray];
            leftList.splice(i-1, 1);
            let leftResult = checkSafeList(leftList, removeCount);

            // remove current
            let currentList = [...numberArray];
            currentList.splice(i, 1);
            let currentResult = checkSafeList(currentList, removeCount);
            
            // remove right
            let rightList = [...numberArray];
            rightList.splice(i+1, 1)
            let rightResult = checkSafeList(rightList, removeCount);
            return leftResult || currentResult || rightResult;
        }
    }
    return true;
}

function isSafe(list, index, isIncreasing) {
    let inRange = Math.abs(list[index] - list[index - 1]) <= 3;
    let isFlowing = isIncreasing ? list[index] > list[index - 1]
        : list[index] < list[index - 1];
    return inRange && isFlowing;
}

module.exports = { main, checkSafeList }