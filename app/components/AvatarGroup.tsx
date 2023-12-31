'use client';

import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import Placeholder from '../../public/images/placeholder.jpg';

type Props = {
    users?: User[];
}

const AvatarGroup = ({ users = [] }: Props) => {

    const sliceUsers = users.slice(0, 3);

    const positionedMap = {
        0: 'top-0 left-[12px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    };


    return (
        <div className='relative h-11 w-11'>
            {
                sliceUsers.map((user, index) => (
                    <div
                        key={user.id}
                        className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionedMap[index as keyof typeof positionedMap]}`}
                    >
                        <Image
                            src={user?.image || Placeholder}
                            alt='Avatar'
                            fill
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default AvatarGroup