'use client';

import {useEvmWalletTokenBalances} from '@moralisweb3/next';
import React, {useState} from 'react';
import WalletTokenCard from './WalletTokenCard';

const WalletPortfolio = () => {
  const [address, setAddress] = useState<string>('');
  const [addressInput, setAddressInput] = useState('');

  const {data: tokens} = useEvmWalletTokenBalances({
    chain: '0x1',
    address,
  });

  const addAddress = () => {
    const newAddress = addressInput;
    setAddress(newAddress);
  };
  return (
    <div className="flex flex-col gap-2 items-center">
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
      <p>Wallet:</p>
      {address}
      {(tokens?.length as number) > 0 ? (
        tokens?.map((token, idx) => (
          <div key={idx}>
            <WalletTokenCard token={token} />
            <p>{}</p>
          </div>
        ))
      ) : (
        <p>No Tokens to display</p>
      )}
      {/* <button onClick={() => console.log(tokens)}>Consolelog</button> */}
    </div>
  );
};

export default WalletPortfolio;
