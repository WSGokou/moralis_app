import Image from 'next/image';
import React from 'react';

interface WalletTokenCardProps {
  token: any;
}

const WalletTokenCard = ({token}: WalletTokenCardProps) => {
  return (
    <div className="flex justify-between p-4 border-2 border-blue-600 gap-2 rounded w-72">
      {token.token.thumbnail && (
        <Image
          src={token.token.thumbnail}
          alt=""
          height={30}
          width={30}
        />
      )}
      <p>{token.token.name}</p>
      <p>{(token.amount / 10 ** token.decimals).toFixed(2)}</p>
    </div>
  );
};

export default WalletTokenCard;
