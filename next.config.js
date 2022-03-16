/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/i,
                type: "asset",
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            icon: true,
                        },
                    },
                ],
            }
        );

        return config;
    },
};

module.exports = nextConfig;
