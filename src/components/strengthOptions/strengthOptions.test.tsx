import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import StrengthOptions from './StrengthOptions';

const MockFunc = jest.fn();

describe('strength options', () => {
    test('input type range renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const rangeInput = screen.getByRole('slider');
        expect(rangeInput).toBeInTheDocument();
    });

    test('input type range renders correct value', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const rangeInput = screen.getByRole('slider');
        expect(rangeInput).toHaveValue('10');
    });

    test('input type checkbox (upper case) renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxUppercase = screen.getByRole('checkbox', {
            name: /include uppercase letters/i,
        });
        expect(checkboxUppercase).toBeInTheDocument();
    });

    test('input type checkbox (lower case) renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxLowercase = screen.getByRole('checkbox', {
            name: /include lowercase letters/i,
        });
        expect(checkboxLowercase).toBeInTheDocument();
    });

    test('input type checkbox (numbers) renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxNumbers = screen.getByRole('checkbox', {
            name: /include numbers/i,
        });
        expect(checkboxNumbers).toBeInTheDocument();
    });

    test('input type checkbox (symbols) renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxSymbols = screen.getByRole('checkbox', {
            name: /include symbols/i,
        });
        expect(checkboxSymbols).toBeInTheDocument();
    });

    test('submit button renders correctly', () => {
        render(<StrengthOptions getData={MockFunc} />);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});

describe('click interaction', () => {
    test('checkbox uppercase checked after clicking one time', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxUppercase = screen.getByRole('checkbox', {
            name: /include uppercase letters/i,
        });
        await user.click(checkboxUppercase);
        expect(checkboxUppercase).toBeChecked();
    });

    test('checkbox uppercase unchecked after clicking two times', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxUppercase = screen.getByRole('checkbox', {
            name: /include uppercase letters/i,
        });
        await user.click(checkboxUppercase);
        await user.click(checkboxUppercase);
        expect(checkboxUppercase).not.toBeChecked();
    });

    test('checkbox lowercase checked after clicking one time', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxLowercase = screen.getByRole('checkbox', {
            name: /include lowercase letters/i,
        });
        await user.click(checkboxLowercase);
        expect(checkboxLowercase).toBeChecked();
    });

    test('checkbox lowercase unchecked after clicking two times', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxLowercase = screen.getByRole('checkbox', {
            name: /include lowercase letters/i,
        });
        await user.click(checkboxLowercase);
        await user.click(checkboxLowercase);
        expect(checkboxLowercase).not.toBeChecked();
    });

    test('checkbox numbers checked after clicking one time', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxNumbers = screen.getByRole('checkbox', {
            name: /include numbers/i,
        });
        await user.click(checkboxNumbers);
        expect(checkboxNumbers).toBeChecked();
    });

    test('checkbox numbers unchecked after clicking two times', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxNumbers = screen.getByRole('checkbox', {
            name: /include numbers/i,
        });
        await user.click(checkboxNumbers);
        await user.click(checkboxNumbers);
        expect(checkboxNumbers).not.toBeChecked();
    });

    test('checkbox symbols checked after clicking one time', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxSymbols = screen.getByRole('checkbox', {
            name: /include symbols/i,
        });
        await user.click(checkboxSymbols);
        expect(checkboxSymbols).toBeChecked();
    });

    test('checkbox symbols unchecked after clicking two times', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxSymbols = screen.getByRole('checkbox', {
            name: /include symbols/i,
        });
        await user.click(checkboxSymbols);
        await user.click(checkboxSymbols);
        expect(checkboxSymbols).not.toBeChecked();
    });

    test('enabled button checking uppercase', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxUppercase = screen.getByRole('checkbox', {
            name: /include uppercase letters/i,
        });
        await user.click(checkboxUppercase);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeEnabled();
    });

    test('enabled button checking lowercase', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxLowercase = screen.getByRole('checkbox', {
            name: /include lowercase letters/i,
        });
        await user.click(checkboxLowercase);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeEnabled();
    });

    test('enabled button checking numbers', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxNumbers = screen.getByRole('checkbox', {
            name: /include numbers/i,
        });
        await user.click(checkboxNumbers);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeEnabled();
    });
    test('enabled button checking symbols', async () => {
        user.setup();
        render(<StrengthOptions getData={MockFunc} />);
        const checkboxSymbols = screen.getByRole('checkbox', {
            name: /include symbols/i,
        });
        await user.click(checkboxSymbols);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeEnabled();
    });
});
