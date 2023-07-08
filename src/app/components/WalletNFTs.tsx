'use client';

import React from 'react';
import WalletNFT from './NFTCard';
import {useEvmWalletNFTs} from '@moralisweb3/next';

const WalletNFTs = () => {
  const {data: nfts} = useEvmWalletNFTs({
    address: '0x5e41020f3520F7D49d03BbbC693f6CBD002f387b',
    chain: '0x1',
  });

  return (
    <div>
      WalletNFTs
      <button
        onClick={() => {
          console.log(nfts);
        }}
      >
        nftslog
      </button>
      <div className="gap-5 lg:gap-20 items-center grid lg:grid-cols-3">
        {nfts?.map((nft, idx) => (
          <div key={idx}>
            <WalletNFT nft={nft} />
          </div>
        ))}
      </div>
      {/* {JSON.stringify(Nfts)} */}
    </div>
  );
};

export default WalletNFTs;
