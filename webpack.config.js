const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
    mnode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "[name][contenthash].html",
            template: "./src/index.html",
        }),
    ],
};
