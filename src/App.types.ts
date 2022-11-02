export type OptionsType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
};

export type PasswordLength = number;

export type PasswordParameters = {
    passwordLength: PasswordLength;
    options: OptionsType;
};
