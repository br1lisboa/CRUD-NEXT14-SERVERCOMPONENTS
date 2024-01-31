'use client';
import React, { useRef, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    className?: string;
    action: (formData: FormData) => Promise<void | boolean>;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, action, className, onSubmit }: Props) {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={ref}
            className={className}
            onSubmit={onSubmit}
            action={async (formData) => {
                await action(formData);
                ref.current?.reset();
            }}
        >
            {children}
        </form>
    );
}
