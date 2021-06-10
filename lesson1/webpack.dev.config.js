const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html')
            }
        ),
        new BundleAnalyzerPlugin(),
    ]
};