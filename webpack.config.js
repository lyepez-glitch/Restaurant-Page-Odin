const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
                'test': /\.(jpg)$/i,
                'type': 'asset/resource',
            },
            {
                'test': /\.css$/i,
                'use': ['style-loader', 'css-loader'],
            }
        ]
    }
}