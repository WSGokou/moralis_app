export interface token {
  name: string;
  chain: string;
  address: string;
}

export const tokens: token[] = [
  {
    name: 'Matic (ERC-20)',
    chain: '0x1',
    address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  },
  {
    name: 'ETH (BEP-20)',
    chain: '0x38',
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  },
];
