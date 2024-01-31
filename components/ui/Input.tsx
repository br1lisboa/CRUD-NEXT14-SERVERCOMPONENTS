import React from 'react';

type Props = {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
};

export default function Input({ name, type, placeholder, value }: Props) {
    return (
        <>
            <input
                className='w-full p-2 border border-gray-200'
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
}
