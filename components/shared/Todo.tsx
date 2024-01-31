import React from 'react';
import ChangeTodo from './ChangeTodo';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

type Props = {
    title: string;
    id: string;
    isCompleted: boolean;
};

export default function Todo({ title, id, isCompleted }: Props) {
    const todoStyle = {
        textDecoration: isCompleted ? 'line-through' : 'none',
        opacity: isCompleted ? 0.5 : 1,
    };

    return (
        <div
            className='w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl'
            style={todoStyle}
        >
            <ChangeTodo
                id={id}
                isCompleted={isCompleted}
            />

            <span className='text-center font-bold uppercase'>{title}</span>

            <div className='flex items-center gap-5'>
                <EditTodo
                    id={id}
                    isCompleted={isCompleted}
                />

                <DeleteTodo id={id} />
            </div>
        </div>
    );
}
