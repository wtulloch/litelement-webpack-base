const {path, resolve, join} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const modeConfig = env => require(`./webpack-builds/webpack.${env.mode}.js`)(env);

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
    {
        from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
        to: 'vendor',
        flatten: true
    },
    {
        from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
        to: 'vendor/bundles',
        flatten: true
      },
      {
        from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
        to: 'vendor',
        flatten: true
      }
];

const assets = [
    {
        from: 'src/img',
        to: 'img/'
    }
];

const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }
    }),
    new CopyWebpackPlugin([...polyfills, ...assets], {
        ignore: ['.DS_Store']
    })
];

module.exports = env => {
    console.log(env);
    
    return webpackMerge({
        mode: env.mode,
  entry: './src/index.ts',
    output: {
    
       filename: '[name].js',
       path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                include: [
                    resolve(__dirname, 'src')
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }, 
    plugins
},
modeConfig(env)
);
}
