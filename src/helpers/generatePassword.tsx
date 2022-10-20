import { PasswordParameters } from '../App.type';
import { OptionsType } from '../App.type';

const generateArr = (options: OptionsType) => {
    const charactersArr: string[] = [];

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

export const generatePassword = (params: PasswordParameters) => {
    const charArr = generateArr(params.options);
    let password = '';
    while (password.length < params.passwordLength) {
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
