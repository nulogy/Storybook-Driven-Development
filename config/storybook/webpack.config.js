const path = require('path');
var autoprefixer = require('autoprefixer');
var paths = require('../../config/paths');

module.exports = {
  resolve: {
    alias: {
      "~": paths.appSrc
    }
  },
  module: {
    loaders: [
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1&modules&localIdentName=[name]__[local]!postcss',
      },
      // "file" loader for svg
      {
        test: /^(?!.*\.icon\.svg$).*\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // load svgs with the extension `.icon.svg` as React components that render inline svgs
      {
        test: /\.icon.svg$/,
        loader: 'babel!svg-react',
      },
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      })
    ];
  }
};
