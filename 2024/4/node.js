const { DIRECTION } = require('./direction.enum');

class Node {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.edges = [null, null, null, null, null, null, null, null]
    }

    setEdge(direction, node) {
        this.edges[direction] = node;
    }

    traverse(direction, searchString, depth) {
        // Part 1
        // // At end
        // if (searchString.length - 1 == depth && searchString[searchString.length - 1] == this.value)
        //     return true;

        // // If no value at next direction
        // if (!this.edges[direction])
        //     return false;

        // // Determine if current node is valid
        // if (searchString[depth] != this.value)
        //     return false

        // return this.edges[direction].traverse(direction, searchString, ++depth);
        if (!this.edges[DIRECTION.TOPLEFT] || !this.edges[DIRECTION.TOPRIGHT] || !this.edges[DIRECTION.BOTTOMRIGHT] || !this.edges[DIRECTION.BOTTOMLEFT])
            return false;

        let first = this.edges[DIRECTION.TOPLEFT].value + this.edges[BOTTOMRIGHT].value;
        let isFirstValid = first.includes("M") && first.includes("S");

        let second = this.edges[DIRECTION.TOPRIGHT].value + this.edges[BOTTOMLEFT].value;
        let isSecondValid = second.includes("M") && second.includes("S");

        return isFirstValid && isSecondValid;
    }



}

module.exports = { Node }