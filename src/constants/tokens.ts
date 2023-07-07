export interface token {
  name: string;
  address: string;
}

export interface tokensByChain {
  chainId: string;
  standard: string;
  tokens: token[];
}

export const tokens = [
  {
    name: 'Matic (ERC-20)',
    id: '0x1',
    address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  },
  {
    name: 'ETH (BEP-20)',
    id: '0x38',
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  },
];

export const tokensByChain: tokensByChain[] = [
  {
    chainId: '0x1',
    standard: 'Ethereum (ERC-20)',
    tokens: [
      {
        name: 'Polygon (Matic)',
        address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
      },
      {
        name: 'BNB',
        address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
      },
    ],
  },
  {
    chainId: '0x38',
    standard: 'BNB Smart Chain (BEP-20)',
    tokens: [
      {
        name: 'ETH',
        address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      },
      {
        name: 'Wrapped BNB (WBNB)',
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      },
    ],
  },
  {
    chainId: '0x19',
    standard: 'Cronos Chain (CRC-20)',
    tokens: [
      {
        name: 'Cardano (ADA)',
        address: '0x0e517979C2c1c1522ddB0c73905e0D39b3F990c0',
      },
      {
        name: 'Polkadot (DOT)',
        address: '0x994047FE66406CbD646cd85B990E11D7F5dB8fC7',
      },
    ],
  },
];
