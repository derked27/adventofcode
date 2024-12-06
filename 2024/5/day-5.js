const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main(params) {
    const filePath = path.join(__dirname, '../input/day-5');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    let orderMap = {};
    let count = 0;
    let countPart2 = 0;
    for await (const line of readLine) {
        if (line.includes('|')) {
            let values = line.split('|').map(Number);
            if (!orderMap[values[1]]) {
                orderMap[values[1]] = new Set();
            }
            orderMap[values[1]].add(values[0]);
        } else if (line.includes(',')) {
            let badValues = new Set();
            let values = line.split(',').map(Number);
            let isValid = true;
            let middle = values[Math.floor(values.length / 2)];
            for (const number of values) {
                if (badValues.has(number)) {
                    isValid = false;
                    break;
                }
                const newBadNumbers = orderMap[number];
                if (newBadNumbers) {
                    newBadNumbers.forEach(x => badValues.add(x));
                }

            }
            if (isValid) {
                count += middle;
            }
            else {
                let partTwoArray = [];
                while (values.length > 0) {
                    let valueToCheck = values.shift();
                    let currentBadNumbers = orderMap[valueToCheck];
                    let canBeAdded = true;
                    for (const number of values) {
                        if (currentBadNumbers && currentBadNumbers.has(number)) {
                            canBeAdded = false;
                            break;
                        }
                    }
                    if (canBeAdded)
                        partTwoArray.push(valueToCheck);
                    else
                        values.push(valueToCheck);
                }
                let part2Middle = partTwoArray[Math.floor(partTwoArray.length / 2)];
                countPart2 += part2Middle;
            }
        }

    }

    console.log(count);
    console.log(countPart2);
}

module.exports = { main }