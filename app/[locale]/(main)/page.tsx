// import TronLinkConnector from '@/components/ui/TronLinkConnector'
// import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
// import { WalletModalProvider, WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui'
// import { motion } from "framer-motion";
// import { LampContainer } from "@/components/ui/lamp";
// import { injected } from "../components/wallet/Connectors"
// import { FlipWords } from "@/components/ui/flip-words";
// import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

// import {TronIcon} from '@/assets/index'
// import TronIcon from '@/assets/icons/tron.svg';

import Energy from './Energy/index';
import Recommend from './Recommend';
import Feature from './Feature';
import { useState, useEffect } from 'react';


export default function HomePage() {
  return (
    <div >
      <section className="relative flex items-center w-full ">
        <div className="relative items-center w-full px-5 pt-24 mx-auto lg:px-0 lg:pt-24 max-w-7xl md:px-12">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative items-center gap-12 m-auto lg:inline-flex">
                <Feature></Feature>
              </div>
              <div className="block w-full mt-12 lg:mt-0">
                <Energy></Energy>
              </div>
            </div>
            <div className='my-32'><Recommend ></Recommend></div>
          </div>
        </div>
      </section>
    </div >
  );
}