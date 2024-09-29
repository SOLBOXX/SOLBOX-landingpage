'use client'
import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletConnect() {
    const {wallet, connected} = useWallet()

  return (
    <div className="flex flex-row justify-center items-center pt-3">
        {connected ? (
        <p>Connected to {wallet?.adapter.name}</p>
      ) : (
        <p className="dark:text-white">Please connect your wallet</p>
      )}
    
    </div>
  )
}

