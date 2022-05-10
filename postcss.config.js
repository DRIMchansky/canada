const env = require('./config/env')

const plugins = [require('postcss-import'), require('autoprefixer')]

if (env.isProd) {
    plugins.push(require('cssnano'))
}

module.exports = {
    plugins: plugins
}
