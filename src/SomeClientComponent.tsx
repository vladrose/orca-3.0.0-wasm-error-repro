"use client"

import React from "react"
import { address, createSolanaRpc, devnet } from "@solana/web3.js"
import { fetchWhirlpool, getWhirlpoolAddress } from "@orca-so/whirlpools-client"
import { tickIndexToPrice } from "@orca-so/whirlpools-core"

const DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES = {
  solanaMainnet: address("2LecshUwdy9xi7meFgHtFJQNSKk4KdTrcpvaB56dP2NQ"),
  solanaDevnet: address("FcrweFY1G9HJAHG5inkGB6pKg1HZ6x9UC2WioAfWrGkR"),
  eclipseMainnet: address("FVG4oDbGv16hqTUbovjyGmtYikn6UBEnazz6RVDMEFwv"),
  eclipseTestnet: address("FPydDjRdZu9sT7HVd6ANhfjh85KLq21Pefr5YWWMRPFp"),
}

const whirlpoolsConfig = DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES.solanaDevnet
const TOKEN_MINT_A = address("2LpceYtTz7N9NxRA3GHzJQKjjHDwrXoeayKX5pQnwiCF")
const TOKEN_MINT_B = address("ExcYMRdoUrCSSuxf5pPySv91GJ65Wy3o42EA7GRJbm7p")
const TICK_SPACING = 256
// ⚠️⚠️⚠️ Uncomment this to get error
// const tickIndexToPrice = _MIN_TICK_INDEX()

// ⚠️⚠️⚠️ Uncomment this to get error
async function getOrcaWhirlpoolAddress() {
  const [whirlpoolAddress] = await getWhirlpoolAddress(whirlpoolsConfig, TOKEN_MINT_A, TOKEN_MINT_B, TICK_SPACING)
  return whirlpoolAddress
}

// eslint-disable-next-line react/display-name
export const SomeClientComponent = React.memo(() => {
  React.useEffect(() => {
    ;(async () => {
      const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"))
      const whirlpoolAddress = await getOrcaWhirlpoolAddress()
      const whirlpool = await fetchWhirlpool(rpc, whirlpoolAddress)
      console.log("Address", whirlpoolAddress)
      // ⚠️⚠️⚠️ This function can't be used on client
      // console.log("Price", sqrtPriceToPrice(whirlpool.data.sqrtPrice, 9, 9))
      // ⚠️⚠️⚠️ This function can't be used on client
      // console.log("Tick Index", tickIndexToPrice(100000, 9, 9))
    })()
  }, [])

  return <div>Client component</div>
})
