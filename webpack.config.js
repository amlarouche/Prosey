const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        filename: "index.html",
    })],
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        proxy: {
            "/api/leaders": "http://localhost:3000"
        },
        compress: true,
        port: 8080,
    }
}