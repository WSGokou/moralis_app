import React from 'react';

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
      <body>{children}</body>
    </html>
  );
}
