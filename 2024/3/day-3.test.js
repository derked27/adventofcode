const { evalString } = require('./day-3');

test('evalString', () => {
    let input = 'mul(10,4)';

    const result = evalString(input);

    expect(result).toBe(40);
})