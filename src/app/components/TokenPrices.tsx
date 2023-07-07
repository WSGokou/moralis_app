import React from 'react';
import TokenPrice from './TokenPrice';
import {tokensByChain} from '@/constants/tokens';

const TokenPrices = () => {
  return (
    <div className="flex gap-5">
      {tokensByChain.map((chain, idx) => (
        <div key={idx}>
          <h1 className="my-4 text-2xl">{chain.standard}</h1>
          {chain.tokens.map((token, idx) => (
            <TokenPrice
              key={idx}
              token={token}
              chainId={chain.chainId}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TokenPrices;
