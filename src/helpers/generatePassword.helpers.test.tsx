import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { randomBytes } from 'crypto';

import {
    generateArr,
    generatePassword,
    generatePasswordStrength,
} from './generatePassword.helpers';

const initialObj = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
};
const uppercaseArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
const lowercaseArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolsArr = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    '<',
    '=',
    '>',
    '?',
    '@',
];
describe.each([
    { a: {}, expected: [] },
    {
        a: { uppercase: true },
        expected: uppercaseArr,
    },
    {
        a: { lowercase: true },
        expected: lowercaseArr,
    },
    {
        a: { numbers: true },
        expected: numbersArr,
    },
    {
        a: { symbols: true },
        expected: symbolsArr,
    },
])('arr output', ({ a, expected }) => {
    test(`returns ${expected}`, () => {
        const obj = { ...initialObj, ...a };
        const result = generateArr(obj);
        expect(result).toStrictEqual(expected);
    });
});

describe('generate password', () => {
    global.Math.random = () => 1;

    test('with 10 character and uppercase letters', () => {
        const password = generatePassword(10, uppercaseArr);
        expect(password).toBe('ZZZZZZZZZZ');
    });
    test('returns null when is less than 6 characters', () => {
        const password = generatePassword(5, uppercaseArr);
        expect(password).toBe(null);
    });
    test('returns null when is more than 14 characters', () => {
        const password = generatePassword(15, uppercaseArr);
        expect(password).toBe(null);
    });
});
