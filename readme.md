# webpack

## 历史问题
    1.x-3.x版本的命令类似的
    4.x之后 很多无法使用了
    是否认识1.x-3.x的命令可以看出你是不是 资深coder
        loader
        rule
    
    问及:
        我去 当时更新到4.x版本 以前的代码 一跑一堆错

## 安装问题

    早期webpack  推荐全局安装
    最新的推荐 项目安装
    ```
        -dev 保存为 开发依赖
        npm install --save-dev webpack
        npm install --save-dev webpack-cli
    ```

## 名词解释

    开发环境
        编码阶段
        jQ:jQ的完整版本
    生产环境
        写完了代码,测试完了上线了
        jQ:jQ.min
    CNPM
        淘宝的写的一个第三方包
        让国内环境下装包更快一些
    ```
        1.安装cnpm
            --registry 使用 指定的地址
            npm install -g cnpm --registry=https://registry.npm.taobao.org
        如果安装不了 可以使用
            npm install -g cnpm
        2.所有使用npm装包的地方 替换为 cnpm
            npm install
            cnpm install
    ```
    webpack命令无效
    ```
        cnpm install webpack webpack-cli -g
    ```

## webpack
    模块打包工具
    默认只能打包 js

## package.json配置自己的命令

scripts 下面 写一组自己的键值对
名字随便 后面跟上要运行的命令
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack-dev-server --open --config webpack.config.js --hot"
  },

  接下来只需要运行 npm run dev
```

## vue-cli 脚手架

```
    为了使用webpack能够解析一个项目中的所有文件 
        安装 less sass vue xxx等一堆 模块 各种模块之间依赖关系
        很多的配置文件
    成熟的框架都会有自己的'脚手架'
        配置好了所有的基础设置,基本的项目模板
```

## 克服对于装包的恐惧"都是纸老虎"

    1. 装包(装功能对应的.js(一个或者是一堆))
    2. 跟日常电脑使用 软件管家 appstore
    3. npm 类似于 软件管家 appstore
    4. 如果软件管家  appstore的服务器崩了
    5. npm的服务器是国外的 (chrome的官方网站)
    6. 为了安装方便 cnpm(360软件管家)
    7. npm install cnpm
    8. 所有的包都可以使用cnpm

## webpack的作用
    1. webpack打包 项目中的所有文件 进行合并 压缩
    2. webpack 默认只能压 js
    3. 提供了 loader这种机制 解析其他的文件
    4. loader 都是包 装包
    5. 跟webpack关联起来 写配置文件
    6. 随着使用的功能越来越多,解析的文件越来越多 ,包,配置
    7. 为了简化大家的环境配置,各大框架的作者 团队 对应的`脚手架`
    8. 脚手架 1-6 全部搞定 配置的就是用来写 这个框架的代码
    9. 安装脚手架 这个包 npm install -g @vue/cli
    1. webpack配置了一堆东西

## vue-cli脚手架

    1. 官方团队推出的快速创建项目基本结构的 工具 
    2. npm 包
    3. 运行命令 自动完成项目的构建
    4. 构建的过程中 下载各种依赖 各种包 npm镜像用不了 可以调整 修改(.vuerc)中的布尔值 为 true false
    5. vue create 项目名 3.x版本之后推出的命令
    6. 兼容 早期的命令 
    ```
        vue 初始化一个 my-project的项目 使用 webpack模板
        vue init webpack my-project
        简易模板 
        vue init webpack-simple  my-project
    ```

###
    npm 软件管家 国外的
    cnpm 软件管家 国内的
    webpack 压包的
    脚手架 帮我们完成压包配置的工具