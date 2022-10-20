export type OptionsType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
};

export type PasswordParameters = {
    passwordLength: number;
    options: OptionsType;
};
