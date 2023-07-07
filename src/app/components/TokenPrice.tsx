'use client';

import {token} from '@/constants/tokens';
import {useEvmTokenPrice} from '@moralisweb3/next';
import React from 'react';

interface TokenPriceProps {
  token: token;
}

const TokenPrice = ({token}: TokenPriceProps) => {
  const {data: nativePrice} = useEvmTokenPrice({
    chain: token.chain,
    address: token.address,
  });

  return (
    <div className="mt-5">
      TokenPrice
      <h1>{token.name}</h1>
      <div>${nativePrice?.usdPrice}</div>
    </div>
  );
};

export default TokenPrice;
