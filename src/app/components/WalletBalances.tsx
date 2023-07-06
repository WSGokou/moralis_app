'use client';
import React, {useState} from 'react';
import WalletBalance from './WalletBalance';

const WalletBalances = () => {
  const [addresses, setAddresses] = useState(['']);
  const [addressInput, setAddressInput] = useState('');

  const addAddress = () => {
    const newAddress = addressInput;
    setAddresses((prev) => [...prev, newAddress]);
    setAddressInput('');
  };
  const removeAddress = (id: number) => {
    setAddresses((prev) =>
      prev.filter((address, idx) => {
        return address[idx] !== address[id];
      }),
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAddressInput(e.target.value)}
          value={addressInput}
          className="border"
        />
        <button
          onClick={addAddress}
          className="bg-green-600"
        >
          Add Address
        </button>
      </div>
      {addresses?.map((address, idx) => (
        <div key={idx}>
          <WalletBalance address={address} />
          <button
            onClick={() => removeAddress(idx)}
            className="bg-red-600"
          >
            Remove Address
          </button>
        </div>
      ))}
    </div>
  );
};

export default WalletBalances;
