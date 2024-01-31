'use-client';
import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
    type?: 'button' | 'submit' | 'reset';
    text: string | ReactNode; // ReactNode is a type that can be any valid JSX, like buttons, divs, etc.
    actionButton?: boolean;
    onClick?: () => void;
};

export default function Button({ type, text, onClick, actionButton }: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(actionButton && 'bg-orange-700 rounded-full p-2 text-white', 'bg-orange-700 px-2 text-white')}
        >
            {text}
        </button>
    );
}
