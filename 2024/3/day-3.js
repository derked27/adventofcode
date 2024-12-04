const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main(params) {
    const filePath = path.join(__dirname, '../input/day-3');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    const mulRegex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g;
    let sum = 0;
    let canEvaluate = true;
    for await (const line of readLine) {
        const matches = getMatches(line, mulRegex);
        for (const val of matches) {
            if (val == 'do()') {
                canEvaluate = true;
            } else if (val == "don't()") {
                canEvaluate = false;
            } 
            else {
                if (canEvaluate) {
                    sum += evalString(val);
                }
            }
        }
    }
    console.log(sum);
}

function getMatches(string, regex) {
    const matches = string.match(regex);
    return matches;
}


function evalString(input) {
    let stringArray = input.split('');
    stringArray.splice(0, 4);
    stringArray.splice(stringArray.length - 1, 1);
    let newString = stringArray.join('');
    let result = newString.split(',').map(Number).reduce((x, y) => x * y, 1);
    return result;
}


module.exports = { evalString, main }