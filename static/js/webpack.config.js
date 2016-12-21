var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: {
        'page1': './page1/src/app/index',
    },

    output: {
        path: path.resolve('./bundles/'),
        filename: "[name].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: "style!css"},
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "es2015",
                        "react",
                        "stage-0"
                    ],
                    plugins: [
                        'transform-runtime',
                        [
                            "import",
                            [{
                                "libraryName": "antd",
                                "style": "css"
                            }]
                        ]
                    ]
                }
            },
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
};