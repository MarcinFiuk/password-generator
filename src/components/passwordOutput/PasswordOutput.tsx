import { ReactComponent as CopyIcon } from './../../assets/icon-copy.svg';

type PasswordOutputProps = {
    password: null | string;
};

function PasswordOutput({ password }: PasswordOutputProps) {
    const copyHandler = () => {
        if (password) {
            navigator.clipboard.writeText(password);
        }
    };
    return (
        <div className='flex justify-between p-4 md:px-8 md:py-5 bg-clrNeutral800 text-2xl md:text-3xl'>
            {!password && <p className='text-clrAccent300'>P4$5W0rD!</p>}
            {password && <p className=''>{password}</p>}
            <button
                onClick={copyHandler}
                className='text-clrPrimary400 hover:text-white'
                disabled={password ? false : true}
            >
                <CopyIcon />
            </button>
        </div>
    );
}

export default PasswordOutput;
