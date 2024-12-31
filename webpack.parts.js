const { WebpackPluginServe } = require("webpack-plugin-serve")
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin")
const { plugins } = require("./webpack.config")

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            host: "192.168.1.217",
            port: process.env.PORT || 8080,
            static: "./dist", // Expose if output path changes
            liveReload: true,
        }),
    ],
});

exports.page = ({ title }) => ({
    plugins: [new MiniHtmlWebpackPlugin({ context: { title }})],
});