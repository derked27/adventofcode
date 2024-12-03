const { checkWithBadLevel } = require('./day-2')

test('safe without removing level', () => {
    const list = [7,6,4,2,1];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('unsafe regardless what level is removed', () => {
    const list = [1,2,7,8,9];

    const result = checkWithBadLevel(list);

    expect(result).toBe(false);
})

test('unsafe regardless what level is removed 2', () => {
    const list = [9,7,6,2,1];

    const result = checkWithBadLevel(list);

    expect(result).toBe(false);

})

test('safe by removing second level', () => {
    const list = [1,3,2,4,5];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing third level', () => {
    const list = [8,6,4,4,1];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing nothing', () => {
    const list = [1,3,6,7,9];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing the first or second element', () => {
    const list = [1,1,3,4,5];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing the last element', () => {
    const list = [1,3,4,5,5];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing the first decreasing', () => {
    const list = [5,5,4,3,2,1];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('safe by removing the last decreasing', () => {
    const list = [10,9,8,7,6,6];

    const result = checkWithBadLevel(list);

    expect(result).toBe(true);

})

test('triple', () => {
    const list = [1,1,1,4,5];

    const result = checkWithBadLevel(list);

    expect(result).toBe(false);

})