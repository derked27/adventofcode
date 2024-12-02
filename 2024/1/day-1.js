const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main() {
    const filePath = path.join(__dirname, 'input');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    let leftList = [];
    let rightList = [];
    let distance = 0;
    let numberMap = {};
    let total = 0;
    for await (const line of readLine) {
        const result = line.split(/\s+/).map(Number);
        // Part 1
        insertSorted(leftList, result[0]);
        insertSorted(rightList, result[1]);

        // Part 2
        initializeValue(numberMap, result[0], true)
        initializeValue(numberMap, result[1], false)
    }
    // Part 1
    for (let i = 0; i < leftList.length; i++) {
        distance += Math.abs(leftList[i] - rightList[i]);
    }

    // Part 2
    Object.keys(numberMap).forEach(key => {
        let value = numberMap[key];
        if (value.leftValueFound) {
            total += key * value.count;
        }
    });

    console.log('Distance: ' + distance);
    console.log('Part 2: ' + total);
}

function initializeValue(dictionary, value, isLeft) {
    let count = isLeft ? 0 : 1;
    if (!dictionary[value]) {
        dictionary[value] = { count: count, leftValueFound: isLeft }
    }
    else {
        if (isLeft) {
            dictionary[value].leftValueFound = true;
        } else {
            dictionary[value].count++
        }
    }
}

function insertSorted(list, number) {
    const index = list.findIndex(x => x > number);

    if (index == -1)
        list.push(number);
    else
        list.splice(index, 0, number);
}

module.exports = { insertSorted, initializeValue, main };