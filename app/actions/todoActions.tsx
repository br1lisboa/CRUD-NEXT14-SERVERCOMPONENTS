'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

export async function create(formData: FormData) {
    const input = formData.get('input') as string;

    if (!input || input === '') {
        return;
    }

    await prisma.todo.create({
        data: {
            title: input,
        },
    });

    revalidatePath('/'); // la idea es que no envié los mismos datos cuando se hace un refresh
}

export async function updateStatus(formData: FormData) {
    const inputId = formData.get('InputID') as string;

    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    });

    const changeStatusTodo = !todo?.isCompleted;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: changeStatusTodo,
        },
    });

    revalidatePath('/');

    return changeStatusTodo;
}

export async function edit(formData: FormData) {
    const inputTitle = formData.get('InputTitle') as string;
    const inputId = formData.get('InputID') as string;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            title: inputTitle,
        },
    });

    revalidatePath('/');
}

export async function remove(formData: FormData) {
    const inputId = formData.get('InputID') as string;

    await prisma.todo.delete({
        where: {
            id: inputId,
        },
    });

    revalidatePath('/');
}
