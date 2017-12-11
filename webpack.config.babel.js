import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

import cssImport from 'postcss-import'
import cssVars from 'postcss-css-variables'
import cssHexa from 'postcss-color-hexa'
import cssRgba from 'postcss-hexrgba'
import cssNested from 'postcss-nested'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

const ENV = process.env.NODE_ENV || 'development'

const CSS_MAPS = ENV!=='production'

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css'],
    modulesDirectories: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "node_modules"),
      'node_modules'
    ],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      containers: path.resolve(__dirname, "src/containers"),
      lib: path.resolve(__dirname, "src/lib"),
      style: path.resolve(__dirname, "src/style"),
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /src\//,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // {
      //   test: /\.css?$/,
      //   exclude: /src\/components\//,
      //   loader: ExtractTextPlugin.extract('style?singleton', [
      //     `css?sourceMap=${CSS_MAPS}&modules&importLoaders=1&localIdentName=[local]${process.env.CSS_MODULES_IDENT || '_[hash:base64:5]'}`,
      //     'postcss'
      //   ].join('!'))
      // },
      {
        test: /\.css$/,
        include: /src/,
        loader: ExtractTextPlugin.extract('style?singleton', [
          `css?sourceMap=${CSS_MAPS}`,
          'postcss'
        ].join('!'))
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(xml|html|txt|md)$/,
        loader: 'raw'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        loader: ENV==='production' ? 'file?name=[path][name]_[hash:base64:5].[ext]' : 'url'
      }
    ]
  },

  postcss: () => [
    precss,
    cssRgba,
    autoprefixer({ browsers: 'last 2 versions' })
  ],

  plugins: ([
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
      disable: ENV!=='production'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({ NODE_ENV: ENV })
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: { collapseWhitespace: true }
    })
  ]).concat(ENV==='production' ? [
    new webpack.optimize.OccurenceOrderPlugin()
  ] : []),

  stats: { colors: true },

  node: {
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },

  devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    proxy: {
      // OPTIONAL: proxy configuration:
      // '/optional-prefix/**': { // path pattern to rewrite
      //	 target: 'http://target-host.com',
      //	 pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
      // }
    }
  }
}
