const { insertSorted, initializeValue } = require('./day-1');

test('insertSorted() empty list', () => {
    const values = [];

    insertSorted(values, 1);

    expect(values.length).toBe(1);
});


test('insertSorted() insert before', () => {
    const values = [10];

    insertSorted(values, 1);

    expect(values.length).toBe(2);
    expect(values[0]).toBe(1);
    expect(values[1]).toBe(10);
});

test('insertSorted() insert after', () => {
    const values = [10];

    insertSorted(values, 20);

    expect(values.length).toBe(2);
    expect(values[0]).toBe(10);
    expect(values[1]).toBe(20);
});

test('initializeValue() newValue and not left', () => {
    const dictionary = {};
    const value = 12345;
    const isLeft = false;

    initializeValue(dictionary, value, isLeft);

    expect(dictionary[value]).toBeTruthy();
    expect(dictionary[value].count).toBe(1);
    expect(dictionary[value].leftValueFound).toBe(false);
});

test('initializeValue() newValue and is left', () => {
    const dictionary = {};
    const value = 12345;
    const isLeft = true;

    initializeValue(dictionary, value, isLeft);

    expect(dictionary[value]).toBeTruthy();
    expect(dictionary[value].count).toBe(0);
    expect(dictionary[value].leftValueFound).toBe(true);
});

test('initializeValue() existing value', () => {
    const dictionary = {};
    const value = 12345;
    const isLeft = false;
    dictionary[value] = { count: 1, leftValueFound: false }

    initializeValue(dictionary, value, isLeft);

    expect(dictionary[value]).toBeTruthy();
    expect(dictionary[value].count).toBe(2);
    expect(dictionary[value].leftValueFound).toBe(false);
});

test('initializeValue() existing value and isLeft', () => {
    const dictionary = {};
    const value = 12345;
    const isLeft = true;
    dictionary[value] = { count: 0, leftValueFound: false }

    initializeValue(dictionary, value, isLeft);

    expect(dictionary[value]).toBeTruthy();
    expect(dictionary[value].count).toBe(0);
    expect(dictionary[value].leftValueFound).toBe(true);
});