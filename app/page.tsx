import React from 'react';
import AddTodo from '@/components/shared/AddTodo';
import { prisma } from '@/utils/prisma';
import Todo from '@/components/shared/Todo';

interface Todo {
    title: string;
    id: number;
    isCompleted: boolean;
}

async function getData(): Promise<Todo[]> {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return data;
}

export default async function Home() {
    const data = await getData();

    return (
        <div className='w-screen py-20 flex justify-center flex-col items-center'>
            <span className='text-3xl font-extrabold uppercase'>TO-DO </span>

            <h1 className='text-3xl font-extrabold uppercase mb-5'>
                Next.JS 14
                <span className='text-orange-700 ml-4'>Server Actions</span>
            </h1>

            <div className='flex justify-center flex-col items-center w-[1000px]'>
                <AddTodo />

                <div className='flex flex-col gap-5 items-center justify-center mt-10 w-full'>
                    {data
                        .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
                        .map(({ title, id, isCompleted }) => (
                            <Todo
                                key={id}
                                title={title}
                                id={String(id)}
                                isCompleted={isCompleted}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
