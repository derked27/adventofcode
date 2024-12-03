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
        const result = checkWithBadLevel(numberArray);
        if (result) {
            safeNumberOfReports++;
        }

    }
    console.log(safeNumberOfReports);
}

function checkWithBadLevel(numberArray) {
    const isSafe = checkSafeList(numberArray);
    if (isSafe)
        return true;
    else {
        for (let i = 0; i < numberArray.length; i++) {
            const copiedList = [...numberArray];
            copiedList.splice(i, 1);
            if (checkSafeList(copiedList)) {
                return true;
            }
        }
    }
    return false;
}

function checkSafeList(numberArray) {
    const isIncreasing = numberArray[1] > numberArray[0];
    const isDecreasing = numberArray[1] < numberArray[0];

    for (let i = 1; i < numberArray.length; i++) {
        const diff = numberArray[i] - numberArray[i - 1];

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3)
            return false;

        if (isIncreasing && diff <= 0)
            return false;
        if (isDecreasing && diff >= 0)
            return false;
    }
    return true;
}

module.exports = { main, checkWithBadLevel }