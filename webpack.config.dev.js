import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [path.resolve(__dirname, 'src/index')],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: false,
            noInfo: true
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
};
