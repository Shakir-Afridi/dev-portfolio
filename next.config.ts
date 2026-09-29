import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: path.resolve(__dirname),
    },
    agentRules: false,
};

export default nextConfig;
