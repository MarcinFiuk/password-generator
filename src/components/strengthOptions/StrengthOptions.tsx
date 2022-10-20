import { useState, useEffect } from 'react';

import { PasswordParameters } from '../../App.type';
import { ReactComponent as ArrowIcon } from './../../assets/icon-arrow-right.svg';
import { generatePasswordStrength } from '../../helpers/generatePassword';
import StrengthBar from './../strengthBar/StrengthBar';

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
                {/* //nextstep: DRY the code - checkboxes look the same so create single component   */}
                <div className='grid grid-cols-custom2 items-center'>
                    <input
                        type='checkbox'
                        id='uppercase'
                        name='uppercase'
                        checked={checkboxesChecked.uppercase}
                        onChange={checkboxHandler}
                    />
                    <label
                        htmlFor='uppercase'
                        className='ml-5 md:ml-6 md:text-lg'
                    >
                        Include Uppercase Letters
                    </label>
                </div>
                <div className='grid grid-cols-custom2 items-center mt-4 md:mt-5'>
                    <input
                        type='checkbox'
                        id='lowercase'
                        name='lowercase'
                        checked={checkboxesChecked.lowercase}
                        onChange={checkboxHandler}
                    />
                    <label
                        htmlFor='lowercase'
                        className='ml-5 md:ml-6 md:text-lg'
                    >
                        Include Lowercase Letters
                    </label>
                </div>
                <div className='grid grid-cols-custom2 items-center mt-4 md:mt-5'>
                    <input
                        type='checkbox'
                        id='numbers'
                        name='numbers'
                        checked={checkboxesChecked.numbers}
                        onChange={checkboxHandler}
                    />
                    <label
                        htmlFor='numbers'
                        className='ml-5 md:ml-6 md:text-lg'
                    >
                        Include Numbers
                    </label>
                </div>
                <div className='grid grid-cols-custom2 items-center mt-4 md:mt-5'>
                    <input
                        type='checkbox'
                        id='symbols'
                        checked={checkboxesChecked.symbols}
                        onChange={checkboxHandler}
                    />
                    <label
                        htmlFor='symbols'
                        className='ml-5 md:ml-6 md:text-lg'
                    >
                        Include Symbols
                    </label>
                </div>
                <StrengthBar strength={passwordStrength} />
                <button
                    type='submit'
                    disabled={buttonDisabled}
                    className='flex gap-4 md:gap-6 justify-center items-center w-full bg-clrPrimary400 text-clrNeutral900 py-5 mt-4 md:mt-8 text-base md:text-lg'
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
