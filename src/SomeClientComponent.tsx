"use client"

import React from "react"
import { address, createSolanaRpc, devnet } from "@solana/web3.js"
import { fetchWhirlpool, getWhirlpoolAddress } from "@orca-so/whirlpools-client"
import { _MIN_TICK_INDEX, sqrtPriceToPrice, tickIndexToPrice } from "@orca-so/whirlpools-core"
import { DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES } from "@orca-so/whirlpools"

const whirlpoolsConfig = DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES.solanaDevnet
const TOKEN_MINT_A = address("2LpceYtTz7N9NxRA3GHzJQKjjHDwrXoeayKX5pQnwiCF")
const TOKEN_MINT_B = address("ExcYMRdoUrCSSuxf5pPySv91GJ65Wy3o42EA7GRJbm7p")
const TICK_SPACING = 256

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
      console.log("Price", sqrtPriceToPrice(whirlpool.data.sqrtPrice, 9, 9))
      console.log("Tick Index", tickIndexToPrice(_MIN_TICK_INDEX(), 9, 9))
    })()
  }, [])

  return <div>Client component</div>
})
