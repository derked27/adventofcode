const DIRECTION = require('./direction.enum');

export class Node {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.edges = [null, null, null, null, null, null, null, null]
    }

    setEdge(direction, node) {
        this.edges[direction] = node;
    }
}