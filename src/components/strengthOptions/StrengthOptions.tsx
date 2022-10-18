import { useState, useEffect } from 'react';

function StrengthOptions() {
    const [buttonDisabled, setButtonDisabled] = useState<undefined | boolean>(
        undefined
    );
    const [rangeNr, setRangeNr] = useState('10');
    const [checkboxesChecked, setCheckboxesChecked] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ passwordLength: rangeNr, options: checkboxesChecked });
    };

    const changeRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRangeNr(e.target.value);
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

    return (
        <div>
            <form onSubmit={(e) => formSubmitHandler(e)}>
                <div>
                    <div>
                        <label htmlFor='chLength'>Character Length</label>
                        <span>{rangeNr}</span>
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
                <div>
                    <input
                        type='checkbox'
                        id='uppercase'
                        name='uppercase'
                        checked={checkboxesChecked.uppercase}
                        onChange={checkboxHandler}
                    />
                    <label htmlFor='uppercase'>Include Uppercase Letters</label>
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='lowercase'
                        name='lowercase'
                        checked={checkboxesChecked.lowercase}
                        onChange={checkboxHandler}
                    />
                    <label htmlFor='lowercase'>Include Lowercase Letters</label>
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='numbers'
                        name='numbers'
                        checked={checkboxesChecked.numbers}
                        onChange={checkboxHandler}
                    />
                    <label htmlFor='numbers'>Include Numbers</label>
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='symbols'
                        checked={checkboxesChecked.symbols}
                        onChange={checkboxHandler}
                    />
                    <label htmlFor='symbols'>Include Symbols</label>
                </div>
                <button type='submit' disabled={buttonDisabled}>
                    GENERATE
                </button>
            </form>
        </div>
    );
}

export default StrengthOptions;
