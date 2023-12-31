'use client';

import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    type?: string;
    required?: boolean;
    placeholder?: string;
}

const MessageInput = ({
    id,
    register,
    type,
    errors,
    required,
    placeholder
}: Props) => {
    return (
        <div className='w-full relative'>
            <input
                id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className='text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none'
            />
        </div>
    )
}

export default MessageInput