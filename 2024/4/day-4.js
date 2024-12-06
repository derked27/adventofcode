const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { Node } = require('./node');
const { DIRECTION } = require('./direction.enum');

async function main(params) {
    const filePath = path.join(__dirname, '../input/day-4');
    const fileStream = fs.createReadStream(filePath);
    const readLine = readline.createInterface({ input: fileStream, });
    const searchString = "XMAS";
    let y = 0;
    let nodeMap = {};
    let part1StartNodes = [];
    let part2StartNodes = [];
    for await (const line of readLine) {
        let characterList = line.split('');
        for (let x = 0; x < characterList.length; x++) {
            const char = characterList[x];
            let mapKey = getMapKey(x, y);
            let node = new Node(x, y, char);
            nodeMap[mapKey] = node;
            if (char == 'X')
                part1StartNodes.push(node);
            if (char == 'A')
                part2StartNodes.push(node);
        }
        y++;
    }

    Object.values(nodeMap).forEach(node => {
        populateEdges(node, nodeMap);
    });

    let part1Result = 0;
    for (const node of part1StartNodes) {
        for(const direction of Object.values(DIRECTION)) {
            if (node.traverse(direction, searchString, 0)) {
                part1Result++;
            }
        }
    }

    let part2Result = 0;
    for (const node of part2StartNodes) {
        if (node.traverse2())
            part2Result++;
    }

    console.log('Part1: ' + part1Result);
    console.log('Part2: ' + part2Result);
}

function getMapKey(x, y) {
    return x + '|' + y;
}

function populateEdges(node, nodeMap) {
    for (let x = node.x - 1; x < node.x + 2; x++) {
        for (let y = node.y - 1; y < node.y + 2; y++) {
            const edge = nodeMap[getMapKey(x,y)];
            if (edge) {
                const direction = findDirection(node.x, node.y, x, y)
                node.setEdge(direction, edge);
            }
        }
    }

    //   0 0    1 0    2 0
    //   0 1    1 1    2 1
    //   0 2    1 2    2 2
}

function findDirection(nodeX, nodeY, foundX, foundY) {
    if (foundX < nodeX && foundY < nodeY)
        return DIRECTION.TOPLEFT;
    if (foundX == nodeX && foundY < nodeY)
        return DIRECTION.TOP;
    if (foundX > nodeX && foundY < nodeY)
        return DIRECTION.TOPRIGHT;
    if (foundX < nodeX && foundY == nodeY)
        return DIRECTION.LEFT;
    if (foundX > nodeX && foundY == nodeY)
        return DIRECTION.RIGHT;
    if (foundX < nodeX && foundY > nodeY)
        return DIRECTION.BOTTOMLEFT;
    if (foundX == nodeX && foundY > nodeY)
        return DIRECTION.BOTTOM;
    if (foundX > nodeX && foundY > nodeY)
        return DIRECTION.BOTTOMRIGHT;
}


module.exports = { main }