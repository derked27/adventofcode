const DIRECTION = require('./direction.enum');

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
        if (!this.edges[0] || !this.edges[2] || !this.edges[4] || !this.edges[6])
            return false;

        let first = this.edges[0].value + this.edges[4].value;
        let isFirstValid = first.includes("M") && first.includes("S");

        let second = this.edges[2].value + this.edges[6].value;
        let isSecondValid = second.includes("M") && second.includes("S");

        return isFirstValid && isSecondValid;
    }



}

module.exports = { Node }