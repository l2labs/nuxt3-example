import BigNumber from 'bignumber.js/bignumber.mjs'

declare interface Window {
  ethereum?: any
}

export type Bignumberish = BigNumber | string | number
