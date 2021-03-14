const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/client/ts/index.ts",
    output: {
        filename: "client.bundle.js",
        path: path.resolve(__dirname, "dist/static")
    },
    devtool: "source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff2?|otf|ttf|eot)$/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".vue"
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "Portobello"
        })
    ]
};
