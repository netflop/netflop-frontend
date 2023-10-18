import StyledComponentsRegistry from '@/libs/Antd/AntdRegistry';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NETFLOP',
  description: 'NETFLOP APP'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
