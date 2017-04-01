var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "inline-sourcemap",
  entry: "./main/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.svg/, 
        loader: 'svg-url-loader'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url-loader" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" 
      },
      {
        test: /\.jpe?g$/,
        loaders: [
          "file-loader?name=[path][name].[ext]",
          'image-webpack-loader?bypassOnDebug'
        ]
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "index.min.js",
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
        // API_ROOT: JSON.stringify("uniquora.kz"),
        DEBUG: true
    }),
    new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            Tether: 'tether',
            "window.Tether": "tether"
    })
  ]
};
