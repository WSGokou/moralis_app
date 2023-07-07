'use client';

import {token} from '@/constants/tokens';
import {useEvmTokenPrice} from '@moralisweb3/next';
import Image from 'next/image';
import React from 'react';

interface TokenPriceProps {
  token: token;
  chainId: string;
}

const TokenPrice = ({token, chainId}: TokenPriceProps) => {
  const {data: nativePrice, isFetching} = useEvmTokenPrice({
    chain: chainId,
    address: token.address,
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-5 border-2 flex flex-col items-center">
      {nativePrice?.tokenLogo && (
        <Image
          src={nativePrice?.tokenLogo}
          alt=""
          width={60}
          height={60}
        />
      )}
      <h1 className="text-lg">{`${nativePrice?.tokenName} (${nativePrice?.tokenSymbol})`}</h1>
      <div>${nativePrice?.usdPrice}</div>
    </div>
  );
};

export default TokenPrice;
