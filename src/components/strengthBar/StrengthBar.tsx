type StrengthBarProps = {
    strength: number;
};

function StrengthBar({ strength }: StrengthBarProps) {
    let first;
    let second;
    let third;
    let fourth;
    let quality;
    first =
        second =
        third =
        fourth =
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid';

    if (strength === 1) {
        quality = 'TOO WEAK!';
        first = first + ' bg-clrAccent600 border-clrAccent600';
    }
    if (strength === 2) {
        quality = 'WEAK';
        first = second = second + ' bg-clrAccent500 border-clrAccent500';
    }
    if (strength === 3) {
        quality = 'MEDIUM';
        first = second = third = third + ' bg-clrAccent400 border-clrAccent400';
    }
    if (strength === 4) {
        quality = 'STRONG';
        first =
            second =
            third =
            fourth =
                fourth + ' bg-clrPrimary400 border-clrPrimary400';
    }

    return (
        <div className='flex justify-between text-center mt-8 p-4 bg-clrNeutral900'>
            <h2 className='text-base md:text-lg text-clrAccent300 leading-7'>
                STRENGTH
            </h2>
            <div className='flex gap-4'>
                <p className='text-lg text-clrNeutral100 '>{quality}</p>
                <div className='flex gap-2'>
                    <div className={first} data-testid='first'></div>
                    <div className={second}></div>
                    <div className={third}></div>
                    <div className={fourth}></div>
                </div>
            </div>
        </div>
    );
}

export default StrengthBar;
