/*let BASE_URL
switch (process.env.DEPLOY) {
  case 'oss':
    BASE_URL = 'http://wwzh.oss-cn-hangzhou.aliyuncs.com/evolution/'
    break
  default:
    BASE_URL = '/'
}*/
const resolve = dir => {
  return require('path').join(__dirname, dir)
}


//设置路径别名
module.exports = {
/*  publicPath: BASE_URL,*/
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
      .set('_r', resolve('src/router'))
      .set('_s', resolve('src/store'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
}
