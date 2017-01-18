'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: './out/',
        filename: "bundle.js",
        publicPath: 'http://localhost:8888/out/'       //本地测试
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: 'css',
        }]]
    },
    devServer: {
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },
    plugins: [
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom'
        })
    ]
};
