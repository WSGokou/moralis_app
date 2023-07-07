'use client';

import {token} from '@/constants/tokens';
import {useEvmTokenPrice} from '@moralisweb3/next';
import React from 'react';

interface TokenPriceProps {
  token: token;
  chainId: string;
}

const TokenPrice = ({token, chainId}: TokenPriceProps) => {
  const {data: nativePrice} = useEvmTokenPrice({
    chain: chainId,
    address: token.address,
  });

  return (
    <div className="mb-5 border-2">
      <h1 className="text-lg">{token.name}</h1>
      <div>${nativePrice?.usdPrice}</div>
    </div>
  );
};

export default TokenPrice;
