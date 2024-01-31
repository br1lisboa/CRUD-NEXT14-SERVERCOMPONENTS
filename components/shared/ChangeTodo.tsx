import React from 'react';
import Form from '../ui/Form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { updateStatus } from '@/app/actions/todoActions';

type Props = {
    id: string;
    isCompleted: boolean;
};

export default function ChangeTodo({ id, isCompleted }: Props) {
    return (
        <Form action={updateStatus}>
            <Input
                name='InputID'
                value={id}
                type='hidden'
            />

            <Button
                actionButton
                type='submit'
                text={<AiOutlineCheckCircle />}
            />
        </Form>
    );
}
