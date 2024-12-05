const fs = require('fs');
const path = require('path');
const readline = require('readline');
const Node = require('./node');

async function main(params) {
    const filePath = path.join(__dirname, '../input/day-3');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    let y = 0;
    let nodeMap = {};
    let startNodes = [];
    for await (const line of readLine) {
        let characterList = line.split('');
        for (let x = 0; x < characterList.length; x++) {
            const char = characterList[x];
            let mapKey = x+'|'+y;
            if (!nodeMap[mapKey]) {
                let node = new  Node(x, y, char);
            }

            
        }
        y++;
    }
}


module.exports = { evalString, main }