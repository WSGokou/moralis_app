'use client';

import React, {useState} from 'react';
import WalletNFT from './NFTCard';
import {useEvmWalletNFTs} from '@moralisweb3/next';

const WalletNFTs = () => {
  const [address, setAddress] = useState<string>(
    '0x5e41020f3520F7D49d03BbbC693f6CBD002f387b',
  );
  const [addressInput, setAddressInput] = useState('');

  const {data: nfts} = useEvmWalletNFTs({
    address,
    chain: '0x1',
  });

  const addAddress = () => {
    const newAddress = addressInput;
    setAddress(newAddress);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex my-2">
        <input
          type="text"
          value={addressInput}
          placeholder="Enter Wallet Address"
          onChange={(e) => setAddressInput(e.target.value)}
          className="border-2"
        />
        <button
          onClick={() => {
            addAddress();
          }}
        >
          Confirm
        </button>
      </div>
      <p>You are currently viewing the NFTs for wallet address: {address}</p>
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
