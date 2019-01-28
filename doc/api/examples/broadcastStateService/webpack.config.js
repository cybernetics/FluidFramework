const path = require('path');
// var Visualizer = require('webpack-visualizer-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const testBroadcastStateServiceConfig = {
    entry: './src/testapp.ts',
    mode: 'development',
    devtool: 'source-map',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new Visualizer({
        //     filename: './statistics.html'
        // })
    ],
};

const broadcastStateServiceConfig = {
    entry: './src/broadcaststateservice.ts',
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'stateserviceproxy.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget : "var",
        library : "BroadcastStateService"
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new Visualizer({
        //     filename: './statistics.html'
        // })
    ]
};

module.exports = [ testBroadcastStateServiceConfig, broadcastStateServiceConfig ];

