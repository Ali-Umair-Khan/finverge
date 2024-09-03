import Layout from '@/UI/Layout';
import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Finverge',
  description: 'Helping startups',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" /> 
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
