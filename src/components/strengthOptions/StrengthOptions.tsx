import { useState } from 'react';

import { ReactComponent as ArrowIcon } from './../../assets/icon-arrow-right.svg';
import { PasswordParameters } from '../../App.types';
import { generatePasswordStrength } from '../../helpers/generatePassword.helpers';
import { updateGradient } from '../../helpers/rangeHelpers';
import { disableButton } from './../../helpers/strengthOptions.helpers';
import StrengthBar from './../strengthBar/StrengthBar';
import Checkbox from '../checkbox/Checkbox';

type StrengthOptionsProps = {
    getData: (param: PasswordParameters) => void;
};

function StrengthOptions({ getData }: StrengthOptionsProps) {
    const [rangeNr, setRangeNr] = useState(10);
    const [checkboxesChecked, setCheckboxesChecked] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { passwordLength: rangeNr, options: checkboxesChecked };
        getData(data);
    };

    const changeRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
        setRangeNr(value);
        document.documentElement.style.setProperty(
            '--gradientBorder',
            `${updateGradient(e.target.min, e.target.max, value)}%`
        );
    };

    const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.id;
        const value = e.target.checked;
        setCheckboxesChecked({
            ...checkboxesChecked,
            [key]: value,
        });
    };

    return (
        <div className='bg-clrNeutral800 p-4 text-clrNeutral100 md:p-8 md:pt-6'>
            <form onSubmit={(e) => formSubmitHandler(e)}>
                <div className='text-base md:text-lg'>
                    <div className='flex justify-between mb-2'>
                        <label htmlFor='chLength'>Character Length</label>
                        <span className='text-clrPrimary400 text-2xl md:text-3xl'>
                            {rangeNr}
                        </span>
                    </div>
                    <input
                        name='chLength'
                        type='range'
                        id='chLength'
                        min='6'
                        max='14'
                        step='1'
                        value={rangeNr}
                        onChange={changeRangeHandler}
                    />
                </div>
                <Checkbox
                    name='uppercase'
                    checked={checkboxesChecked.uppercase}
                    onChange={checkboxHandler}
                >
                    Include Uppercase Letters
                </Checkbox>
                <Checkbox
                    name='lowercase'
                    checked={checkboxesChecked.lowercase}
                    onChange={checkboxHandler}
                >
                    Include Lowercase Letters
                </Checkbox>
                <Checkbox
                    name='numbers'
                    checked={checkboxesChecked.numbers}
                    onChange={checkboxHandler}
                >
                    Include Numbers
                </Checkbox>
                <Checkbox
                    name='symbols'
                    checked={checkboxesChecked.symbols}
                    onChange={checkboxHandler}
                >
                    Include Symbols
                </Checkbox>
                <StrengthBar
                    strength={generatePasswordStrength(checkboxesChecked)}
                />
                <button
                    type='submit'
                    disabled={disableButton(checkboxesChecked)}
                    className='flex gap-4 md:gap-6 justify-center items-center w-full bg-clrPrimary400 hover:bg-clrNeutral900 border-2 border-clrPrimary400 text-clrNeutral900 hover:text-clrPrimary400 py-5 mt-4 md:mt-8 text-base md:text-lg duration-150'
                >
                    GENERATE
                    <span className='self-center -translate-y-px'>
                        <ArrowIcon />
                    </span>
                </button>
            </form>
        </div>
    );
}

export default StrengthOptions;
