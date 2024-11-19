"use client"

import React from "react"
import Image from "next/image"
import NextLink from "next/link"
import { getWhirlpoolAddress, fetchWhirlpool } from "@orca-so/whirlpools-client"
import { sqrtPriceToPrice } from "@orca-so/whirlpools-core"

import { address, Address, createSolanaRpc, devnet } from "@solana/web3.js"
/*
 * ⚠️⚠️⚠ This variable can't be used on client
 * */
// import { DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES } from "@orca-so/whirlpools"

const DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES = {
  solanaMainnet: address("2LecshUwdy9xi7meFgHtFJQNSKk4KdTrcpvaB56dP2NQ"),
  solanaDevnet: address("FcrweFY1G9HJAHG5inkGB6pKg1HZ6x9UC2WioAfWrGkR"),
  eclipseMainnet: address("FVG4oDbGv16hqTUbovjyGmtYikn6UBEnazz6RVDMEFwv"),
  eclipseTestnet: address("FPydDjRdZu9sT7HVd6ANhfjh85KLq21Pefr5YWWMRPFp"),
}

const TOKEN_MINT_A = address("2LpceYtTz7N9NxRA3GHzJQKjjHDwrXoeayKX5pQnwiCF")
const TOKEN_MINT_B = address("ExcYMRdoUrCSSuxf5pPySv91GJ65Wy3o42EA7GRJbm7p")
const TICK_SPACING = 256

async function getOrcaWhirlpoolAddress(tokenMintA: Address, tokenMintB: Address, tickSpacing: number) {
  const whirlpoolsConfig = DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES.solanaDevnet
  const [whirlpoolAddress] = await getWhirlpoolAddress(whirlpoolsConfig, tokenMintA, tokenMintB, tickSpacing)
  return whirlpoolAddress
}

export default function NotWorkingPage() {
  React.useEffect(() => {
    ;(async () => {
      const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"))
      const whirlpoolAddress = await getOrcaWhirlpoolAddress(TOKEN_MINT_A, TOKEN_MINT_B, TICK_SPACING)
      const whirlpool = await fetchWhirlpool(rpc, whirlpoolAddress)
      console.log("Address", whirlpoolAddress)
      // ⚠️⚠️⚠️ This function can't be used on client
      console.log("Price", sqrtPriceToPrice(whirlpool.data.sqrtPrice, 9, 9))
    })()
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <h1>Check the logs</h1>
        <NextLink href={"/"}>Link to server page</NextLink>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
