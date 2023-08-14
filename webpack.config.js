const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
};
