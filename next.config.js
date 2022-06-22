const nextConfig = {
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    webpack(config) {
        // Allow importing of shader files (e.g. `.glsl` -- filenames below)
        // @see: https://github.com/glslify/glslify-loader
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag|ps)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
        })

        return config
    },
}

module.exports = nextConfig
