'use client';

import React from 'react';
import { User } from '@prisma/client';
import Image from 'next/image';
import Placeholder from '@/public/images/placeholder.jpg';
import useActiveList from '../hooks/useActiveList';

type Props = {
    user?: User;
}

const Avatar = ({ user }: Props) => {
    const { members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;
    return (
        <div className='relative'>
            <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
                <Image
                    src={user?.image || Placeholder}
                    alt='Avatar'
                    fill
                />
            </div>
            {
                isActive && (
                    <span className='absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3' />
                )
            }
        </div>
    )
}

export default Avatar