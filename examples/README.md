# maby-lib 测试文件

  > 开发过程之中，由于极难进行即时查看组件的效果，因此创建了一个示例文件夹，用于实时呈现UI效果

  #### 基于 webpack 搭建的示例效果文件夹
  
  1. 热替换模块 HotModuleReplacementPlugin
  2. 显示模块相对路径 NamedModulesPlugin
  3. HTML文件创建模块 HtmlWebpackPlugin
  4. 抽离公共文件模块 CommonsChunkPlugin
  5. 支持 css 和 less
  6. 默认端口 18888

  #### 如何使用

  1. 安装配置环境

  > /examples 
  `npm install`

  2. 启动项目

  > 首先启动 maby-lib 
    /maby-lib
  `npm start`

  > 在启动 examples
   /examples
   `npm start`

  