import React from 'react';
import TokenPrice from './TokenPrice';
import {tokens} from '@/constants/tokens';

const TokenPrices = () => {
  return (
    <div>
      {tokens.map((token, idx) => (
        <TokenPrice
          key={idx}
          token={token}
        />
      ))}
    </div>
  );
};

export default TokenPrices;
