module.exports={
  publicPath: "./",
  configureWebpack:{
    resolve:{
      alias:{
        'common':"@/common",
        'assets':"@/assets",
        'network':"@/network",
        'components':"@/components",
        'views':'@/views'
      }
    }
  }
}