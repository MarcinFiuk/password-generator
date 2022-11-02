import { useState, useEffect } from 'react';

import { PasswordParameters } from './App.types';
import {
    generatePassword,
    generateArr,
} from './helpers/generatePassword.helpers';
import PasswordOutput from './components/passwordOutput/PasswordOutput';
import StrengthOptions from './components/strengthOptions/StrengthOptions';

function App() {
    const [password, setPassword] = useState<null | string>(null);
    const [passwordParameters, setPasswordParameters] =
        useState<PasswordParameters | null>(null);

    const getPasswordParameters = (parameters: PasswordParameters) => {
        setPasswordParameters(parameters);
    };

    useEffect(() => {
        if (passwordParameters) {
            const { options, passwordLength } = passwordParameters;
            const charArr = generateArr(options);
            const newPassword = generatePassword(passwordLength, charArr);
            setPassword(newPassword);
        }
    }, [passwordParameters]);

    return (
        <main>
            <div className='grid place-items-center h-screen min-h-fit'>
                <div className='w-95 max-w-540 flex flex-col gap-4 md:gap-6'>
                    <h1 className='text-clrAccent300 text-base text-center md:text-2xl'>
                        Password Generator
                    </h1>
                    <PasswordOutput password={password} />
                    <StrengthOptions getData={getPasswordParameters} />
                </div>
            </div>
        </main>
    );
}

export default App;
