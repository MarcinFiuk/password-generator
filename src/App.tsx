import { useState, useEffect } from 'react';

import { PasswordParameters } from './App.type';
import { generatePassword } from './helpers/generatePasword';
import PasswordOutput from './components/passwordOutput/PasswordOutput';
import StrengthOptions from './components/strengthOptions/strengthOptions';

function App() {
    const [password, setPassword] = useState<null | string>(null);
    const [passwordParameters, setPasswordParameters] =
        useState<PasswordParameters | null>(null);

    const getPasswordParameters = (param: PasswordParameters) => {
        setPasswordParameters(param);
    };

    useEffect(() => {
        if (passwordParameters) {
            const newPassword = generatePassword(passwordParameters);
            setPassword(newPassword);
        }
    }, [passwordParameters]);

    return (
        <div className='grid place-items-center h-screen min-h-fit'>
            <div>
                <h1 className='text-clrAccent300 text-base text-center md:text-2xl'>
                    Password Generator
                </h1>
                <PasswordOutput password={password} />
                <StrengthOptions getData={getPasswordParameters} />
            </div>
        </div>
    );
}

export default App;
