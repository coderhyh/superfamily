module.exports = {
  productionSourceMap: false, // 关键语句
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  /* devServer: {
    proxy: {
      // api是请求前缀，紧跟端口名
      'jia': {
        target: 'https://jia.baidu.com',
        // 重写路径
        pathRewrite: {
          '^/jia': ''
        },
        // 以下两个配置，默认true
        // 用于支持websocket
        // ws: true,
        // 用于控制请求头中的host值。为true，代理服务器向服务器发送端口与服务器相匹配的地址，撒谎，不传递真的Host
        // changeOrigin: true
      },
    }
  } */
}