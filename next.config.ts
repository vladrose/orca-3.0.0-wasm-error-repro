import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  serverExternalPackages: ["@orca-so/whirlpools", "@orca-so/whirlpools-client", "@orca-so/whirlpools-core"],
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

    return config
  },
}

export default nextConfig
