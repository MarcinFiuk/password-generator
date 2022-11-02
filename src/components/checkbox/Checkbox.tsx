import { ComponentPropsWithoutRef } from 'react';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
    name: string;
};

function Checkbox({ name, checked, onChange, children }: CheckboxProps) {
    return (
        <div className='grid grid-cols-custom2 items-center mt-4 md:mt-5'>
            <input
                type='checkbox'
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                // checked={checkboxesChecked.lowercase}
                // onChange={checkboxHandler}
            />
            <label htmlFor={name} className='ml-5 md:ml-6 md:text-lg'>
                {children}
            </label>
        </div>
    );
}

export default Checkbox;
