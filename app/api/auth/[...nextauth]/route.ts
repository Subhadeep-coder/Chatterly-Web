import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '../../../libs/prismadb';
import { Adapter } from 'next-auth/adapters';
import authOptions from './auth';



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };