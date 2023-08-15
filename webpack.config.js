const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: "images/[name].[ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(svg|jpeg|jpg|png|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/icons/weather_api_icon",
                    to: path.resolve(__dirname, "dist/weather_icons"),
                },
            ],
        }),
    ],
};
