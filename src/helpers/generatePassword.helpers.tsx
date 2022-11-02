import { PasswordParameters } from '../App.types';
import { OptionsType, PasswordLength } from '../App.types';

type CharactersArrType = string[];

export const generateArr = (options: OptionsType) => {
    const charactersArr: CharactersArrType = [];

    if (options.uppercase) {
        const uppercase = Array.from(Array(26)).map((_, i) =>
            String.fromCharCode(65 + i)
        );
        charactersArr.push(...uppercase);
    }

    if (options.lowercase) {
        const lowercase = Array.from(Array(26)).map((_, i) =>
            String.fromCharCode(97 + i)
        );
        charactersArr.push(...lowercase);
    }

    if (options.numbers) {
        const numbers = Array.from(Array(10)).map((_, i) =>
            String.fromCharCode(48 + i)
        );
        charactersArr.push(...numbers);
    }

    if (options.symbols) {
        const symbols1 = Array.from(Array(15)).map((_, i) =>
            String.fromCharCode(33 + i)
        );
        const symbols2 = Array.from(Array(5)).map((_, i) =>
            String.fromCharCode(60 + i)
        );
        charactersArr.push(...symbols1, ...symbols2);
    }

    return charactersArr;
};

export const generatePassword = (
    passwordLength: PasswordLength,
    charArr: CharactersArrType
) => {
    //6 and 14 are min and max from input type range StrengthOptions.tsx
    if (passwordLength < 6 || passwordLength > 14) return null;
    let password = '';
    while (password.length < passwordLength) {
        const randomIndex = Math.floor(Math.random() * (charArr.length - 1));
        password += charArr[randomIndex];
    }
    return password;
};

export const generatePasswordStrength = (options: OptionsType) => {
    const valuesArr = Object.values(options);
    const passwordStrength = valuesArr.reduce((acc, curr) => {
        if (curr) {
            acc++;
        }
        return acc;
    }, 0);

    return passwordStrength;
};
