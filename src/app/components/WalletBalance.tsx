'use client';

import React from 'react';
import {useEvmNativeBalance} from '@moralisweb3/next';

interface WalletBalanceProps {
  address: string;
}

// Take address as a prop
const WalletBalance = ({address}: WalletBalanceProps) => {
  // const address = '0x2bf3937b8bccce4b65650f122bb3f1976b937b2f';
  // const address = '0x5e41020f3520F7D49d03BbbC693f6CBD002f387b';
  // const address = '0xa6a6653aa1beb6fdfaf008a1aee25ded0526405d';
  const {data: nativeBalance} = useEvmNativeBalance({address});

  return (
    <div className="mt-5">
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
    </div>
  );
};

export default WalletBalance;
