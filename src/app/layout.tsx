import './globals.css';
import React from 'react';
import Navbar from './components/NavBar';

export const metadata = {
  title: 'Moralis Dapp',
  description: 'Next JS App integrating Moralis.io',
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: IProps) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
