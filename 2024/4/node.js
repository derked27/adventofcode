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
        // At end
        if (searchString.length - 1 == depth && searchString[searchString.length - 1] == this.value)
            return true;

        // If no value at next direction
        if (!this.edges[direction])
            return false;

        // Determine if current node is valid
        if (searchString[depth] != this.value)
            return false

        return this.edges[direction].traverse(direction, searchString, ++depth);
    }



}

module.exports = { Node }