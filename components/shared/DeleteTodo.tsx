import React from 'react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { remove } from '@/app/actions/todoActions';

export default function DeleteTodo({ id }: { id: string }) {
    return (
        <Form action={remove}>
            <Input
                name='InputID'
                value={id}
                type='hidden'
            />

            <Button
                actionButton
                type='submit'
                text={<RiDeleteBin4Line />}
            />
        </Form>
    );
}
