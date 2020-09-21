'use strict'
// const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let externals = _externals()

module.exports = {
  entry: {
    app: __dirname + '/start.js',
    swagger: __dirname + '/auxiliary/index.js',
  },
  target: 'node',
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      '@controller': path.resolve('controller'),
      '@models': path.resolve('models'),
      '@businessServer': path.resolve('business-server'),
      '@commons': path.resolve('commons'),
      '@config': path.resolve('config'),
      '@router': path.resolve('router'),
      '@vo': path.resolve('vo')
    }
  },
  externals: externals,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env'],
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {
                legacy: true
              }
            ],
            ['@babel/plugin-proposal-class-properties']
          ]
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
}

function _externals() {
  let manifest = require('./package.json')
  let dependencies = manifest.dependencies
  let externals = {}
  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p
  }
  return externals
}
