module.exports = {
    images: {
        domains: ['courses-top.ru'],
    },
    // exportPathMap: function () {
    //     return {
    //         '/': { page: '/' },
    //         // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
    //         '/courses/next/financial-analytics': {
    //             page: 'courses/[alias]',
    //         }, // correct
    //     };
    // },
    webpack(config, options) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                override: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        });

        return config;
    },
};