const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // port: 8086,
        // '/api':{
        //     target:"",
        //     changeOrigin: true
        // }
    },
    configureWebpack: config => {
        config.module.rules.push({
          test: /\.worker.js$/,
          use: {
            loader: 'worker-loader',
            options: { inline: true, name: 'workerName.[hash].js' }
          }
        })
      },
      parallel: false,
      chainWebpack: config => {
        config.output.globalObject('this')
      }
      //因为worker线程中不存在window对象，因此不能直接使用，要用this代替
})