import { useState, useEffect } from 'react';

import { PasswordParameters } from '../../App.types';
import { ReactComponent as ArrowIcon } from './../../assets/icon-arrow-right.svg';
import { generatePasswordStrength } from '../../helpers/generatePassword.helpers';
import StrengthBar from './../strengthBar/StrengthBar';
import Checkbox from '../checkbox/Chexkbox';

type StrengthOptionsProps = {
    getData: (param: PasswordParameters) => void;
};

function StrengthOptions({ getData }: StrengthOptionsProps) {
    const [buttonDisabled, setButtonDisabled] = useState<undefined | boolean>(
        undefined
    );
    const [rangeNr, setRangeNr] = useState(10);
    const [checkboxesChecked, setCheckboxesChecked] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });
    const [passwordStrength, setPasswordStrength] = useState(0);

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { passwordLength: rangeNr, options: checkboxesChecked };
        getData(data);
    };

    const changeRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeNr(e.target.valueAsNumber);
    };

    const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.id;
        const value = e.target.checked;
        setCheckboxesChecked({
            ...checkboxesChecked,
            [key]: value,
        });
    };

    useEffect(() => {
        const disableButton = () => {
            const checkboxesValArr = Object.values(checkboxesChecked);
            const stateOfButton = checkboxesValArr.every(
                (state) => state === false
            );
            setButtonDisabled(stateOfButton);
        };

        disableButton();
    }, [checkboxesChecked]);

    useEffect(() => {
        const passwordStrength = generatePasswordStrength(checkboxesChecked);
        setPasswordStrength(passwordStrength);
    }, [checkboxesChecked]);

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
                <StrengthBar strength={passwordStrength} />
                <button
                    type='submit'
                    disabled={buttonDisabled}
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
