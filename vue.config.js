// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false,
    filenameHashing: false

}
