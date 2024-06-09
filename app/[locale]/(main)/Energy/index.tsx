"use client"
import { useToast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { useTranslations } from 'next-intl';

import Wallet from "./TronWallet";
import { WalletDisconnectedError, WalletNotFoundError, type Adapter, type WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { WalletProvider, useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
// import { LedgerAdapter } from '@tronweb3/tronwallet-adapter-ledger';
import { WalletModalProvider } from "@tronweb3/tronwallet-adapter-react-ui";

import Form from './From'


export default function Energy() {
  const { toast } = useToast()
  const t = useTranslations('energy');
  const [adapters, setAdapters] = useState<Adapter[]>([]);
  useEffect(() => {
    import('@tronweb3/tronwallet-adapters').then((res) => {
      const {
        BitKeepAdapter,
        OkxWalletAdapter,
        TokenPocketAdapter,
        TronLinkAdapter,
        WalletConnectAdapter
      } = res;
      const tronLinkAdapter = new TronLinkAdapter();
      const walletConnectAdapter = new WalletConnectAdapter({
        network: 'Nile',
        options: {
          relayUrl: 'wss://relay.walletconnect.com',
          // example WC app project ID
          projectId: '5fc507d8fc7ae913fff0b8071c7df231',
          metadata: {
            name: 'Test DApp',
            description: 'JustLend WalletConnect',
            url: 'https://your-dapp-url.org/',
            icons: ['https://your-dapp-url.org/mainLogo.svg'],
          },
        },
        web3ModalConfig: {
          themeMode: 'dark',
          themeVariables: {
            '--w3m-z-index': '1000',
          },
        },
      });
      const bitKeepAdapter = new BitKeepAdapter();
      const okxwalletAdapter = new OkxWalletAdapter();
      setAdapters([tronLinkAdapter,okxwalletAdapter,bitKeepAdapter])
    });
  }, [setAdapters])

  function onError(e: WalletError) {
    if (e instanceof WalletNotFoundError) {
      toast({ description: e.message });
    } else if (e instanceof WalletDisconnectedError) {
      toast({ description: e.message });
    } else toast({ description: e.message });
  }



  return (
    <div>
      <WalletProvider onError={onError} adapters={adapters} disableAutoConnectOnLoad={true}>
        <WalletModalProvider>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <div className='flex justify-between items-center'>
                  <div>{t('Energy rental')}</div>
                  <Wallet></Wallet>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form></Form>
            </CardContent>
          </Card></WalletModalProvider></WalletProvider>
    </div>

  )
}