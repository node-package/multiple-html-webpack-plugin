'use strict';

const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class MultipleHtmlWebpackPlugin {

    constructor(options) {
        // Default options
        this.options = _.extend({
            plugins: [],
            test: path.join(__dirname, '*.tpl.html'),
        }, options);


        let plugins = this.options.plugins;

        glob.sync(this.options.test).forEach(function (file) {
            var basename = path.basename(file);
            basename = basename.replace(/.tpl/gi, '');
            if (basename.indexOf('.html') === -1) {
                basename += '.html';
            }

            plugins.push(
                new HtmlWebpackPlugin({
                    filename: basename,
                    template: file,
                    minify: true
                })
            )
        });

    }

}


module.exports = MultipleHtmlWebpackPlugin;
