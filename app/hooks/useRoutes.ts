import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import {
    HiArrowLeftOnRectangle,
    HiUsers
} from 'react-icons/hi2';
import useConversation from './useConversation';
import { useMemo } from 'react';
import { signOut } from 'next-auth/react';

const useRoutes = () => {
    const pathName = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathName === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathName === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            icon: HiArrowLeftOnRectangle,
            onClick: () => signOut()
        },
    ], [pathName, conversationId]);

    return routes;
}

export default useRoutes;