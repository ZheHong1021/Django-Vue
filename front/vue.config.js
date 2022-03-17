const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  outputDir: 'dist',
  assetsDir: 'static', // 指定build時，在靜態文件上一層添加static目錄
  
})
