import type { NextConfig } from "next"
import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin"
import path from "node:path"

const nextConfig: NextConfig = {
  serverExternalPackages: ["@orca-so/whirlpools", "@orca-so/whirlpools-client", "@orca-so/whirlpools-core"],
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

    // config.plugins.push(
    //   new WasmPackPlugin({
    //     crateDirectory: path.resolve(__dirname, "core"),
    //     outDir: path.resolve(__dirname, "pkg"),
    //   }),
    // )

    return config
  },
}

export default nextConfig
