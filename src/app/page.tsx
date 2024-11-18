import Image from "next/image";
import { getWhirlpoolAddress } from '@orca-so/whirlpools-client'
import { DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES } from "@orca-so/whirlpools"
import { address, Address } from "@solana/web3.js"

const TOKEN_MINT_A = address("2LpceYtTz7N9NxRA3GHzJQKjjHDwrXoeayKX5pQnwiCF")
const TOKEN_MINT_B = address("ExcYMRdoUrCSSuxf5pPySv91GJ65Wy3o42EA7GRJbm7p")
const TICK_SPACING = 256

export async function getOrcaWhirlpoolAddress(
  tokenMintA: Address,
  tokenMintB: Address,
  tickSpacing: number
) {
  const whirlpoolsConfig = DEFAULT_WHIRLPOOLS_CONFIG_ADDRESSES.solanaDevnet
  const [whirlpoolAddress] = await getWhirlpoolAddress(
    whirlpoolsConfig,
    tokenMintA,
    tokenMintB,
    tickSpacing,
  )

  return whirlpoolAddress
}

export default async function Home() {
  const whirlpoolAddress = await getOrcaWhirlpoolAddress(TOKEN_MINT_A, TOKEN_MINT_B, TICK_SPACING)
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Whirlpool: {whirlpoolAddress}</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
