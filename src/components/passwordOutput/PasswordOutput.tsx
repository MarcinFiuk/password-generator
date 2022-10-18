type PasswordOutputProps = {
    password: null | string;
};

function PasswordOutput({ password }: PasswordOutputProps) {
    return (
        <div>
            <p>{password}</p>
            <button>C</button>
        </div>
    );
}

export default PasswordOutput;
