import { useState } from 'react';

import { ReactComponent as CopyIcon } from './../../assets/icon-copy.svg';

type PasswordOutputProps = {
    password: string | null;
};

function PasswordOutput({ password }: PasswordOutputProps) {
    const [confirmation, setConfirmation] = useState('');

    const copyHandler = () => {
        if (password) {
            navigator.clipboard.writeText(password);

            setConfirmation('COPIED');

            setTimeout(() => {
                setConfirmation('');
            }, 2000);
        }
    };
    return (
        //
        <div className='flex justify-between p-4 md:px-8 md:py-5 bg-clrNeutral800 text-2xl md:text-3xl'>
            {!password && <p className='text-clrAccent300'>P4$5W0rD!</p>}
            {password && <p data-testid='password'>{password}</p>}
            <div className='flex text-center'>
                <span
                    className='self-center text-clrPrimary400 text-base md:text-lg mr-4'
                    data-testid='confirmation'
                >
                    {confirmation}
                </span>
                <button
                    onClick={copyHandler}
                    className='text-clrPrimary400 hover:text-white'
                    disabled={password ? false : true}
                    aria-label='copy'
                >
                    <CopyIcon />
                </button>
            </div>
        </div>
    );
}

export default PasswordOutput;
