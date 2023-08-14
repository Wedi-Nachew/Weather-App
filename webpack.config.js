const path = require("path");

modules.export = {
    entry: "./src/index.js",
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "/dist"),
    },
};
