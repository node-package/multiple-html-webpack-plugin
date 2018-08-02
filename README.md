<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  
  <h1>Multiple HTML Webpack Plugin</h1>
  <p>This Plugin inherited [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) Plugin and make it easy to extend, include and replace your html files</p>
</div>

### How to use

**webpack.config.js**
```js
...
const MultipleHtmlWebpackPlugin = require('multiple-html-webpack-plugin');
...

let config = {
    ...
}

new MultipleHtmlWebpackPlugin({
  plugins: config.plugins,
  test: './src/tpl/*.tpl.html'
});

// Export Module
module.exports = config;
```

### Options

**plugins**
Reference to your WebPack `plugins` variable

**test**
Path with RegExp for your html files
