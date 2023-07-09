import Image from 'next/image';
import React from 'react';

interface WalletNFTProps {
  nft: any;
}

const WalletNFT = ({nft}: WalletNFTProps) => {
  const nftImage =
    nft?.metadata?.image && nft?.metadata?.image?.includes('ipfs')
      ? `https://ipfs.io/ipfs/${nft?.metadata?.image?.split('ipfs://')[1]}`
      : nft?.metadata?.image?.split('\\')[0];

  return (
    <div className="flex flex-col gap-2 p-4 items-center border-2 border-blue-600">
      {/* <h1>{JSON.stringify(nft)}</h1> */}
      <h1>{nft?.metadata?.name}</h1>
      {nftImage ? (
        <Image
          src={nftImage}
          alt=""
          height={100}
          width={100}
        />
      ) : (
        'No Image to display'
      )}
      <h1>{nft?.metadata?.description}</h1>
      {/* <button onClick={() => console.log(nft)}>consolelog</button> */}
    </div>
  );
};

export default WalletNFT;
