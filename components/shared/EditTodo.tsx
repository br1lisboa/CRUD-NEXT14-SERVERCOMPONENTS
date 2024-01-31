'use client';

import React, { useState } from 'react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { edit } from '@/app/actions/todoActions';
import { BiEdit } from 'react-icons/bi';

type Props = {
    id: string;
    isCompleted: boolean;
};

export default function EditTodo({ id, isCompleted }: Props) {
    const [editTodo, setEditTodo] = useState<boolean>(false);

    function handleEdit() {
        if (isCompleted) {
            return;
        }
        setEditTodo(!editTodo);
    }

    function handleSubmit() {
        setEditTodo(false);
    }

    return (
        <div className='flex gap-5 items-center'>
            <Button
                onClick={handleEdit}
                text={<BiEdit />}
                actionButton
            />

            {editTodo && (
                <Form
                    action={edit}
                    onSubmit={handleSubmit}
                >
                    <Input
                        name='InputID'
                        value={id}
                        type='hidden'
                    />

                    <div className='flex justify-center'>
                        <Input
                            name='InputTitle'
                            type='text'
                            placeholder='Edit Todo...'
                        />

                        <Button
                            type='submit'
                            text='Save'
                        />
                    </div>
                </Form>
            )}
        </div>
    );
}
