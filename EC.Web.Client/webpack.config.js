var path = require('path');
var webpack = require('webpack');

module.exports ={
    devtool: 'inline-source-map',
    entry: [
        "webpack-dev-server/client?",//http://localhost:8080",
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    devServer: {
        contentBase: "./wwwroot",
        hot: true
    },
    output:{path:__dirname, filename: 'bundle.js'},
    module:{
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot-loader/webpack'],
            },
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:[
                        'react',
                        'es2015'
                    ]
                }
            }
        ],

    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    ]
}
