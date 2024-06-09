import { tronWeb } from '@/app/api/tronWeb';
import { Button } from '@/components/ui/button';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import {
  WalletActionButton,
} from '@tronweb3/tronwallet-adapter-react-ui';
import { useEffect, useState } from 'react';


const Wallet = () => {
  
  return (
    <div>
      <WalletActionButton></WalletActionButton>
      
    </div>
  )
};


export default Wallet;