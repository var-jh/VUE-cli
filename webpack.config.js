
const path = require('path');
const HtmlWp = require('html-webpack-plugin');
const CleanWP = require('clean-webpack-plugin');
module.exports = {
    // '打包的入口文件'
    entry: path.resolve(__dirname, './src/js/main.js'),
    //输出
    output: {
        path: path.resolve(__dirname, './dist'),
        //打包后的文件名
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWp({
            //不配置也会自动生成一个index.html
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        //每次打包后可能会有一些垃圾文件，目录，用它来清除
        new CleanWP(['dist'])
    ],
    // 模块配置
    module: {
        // 配置规则
        rules: [
            // css
            {
                test: /\.css$/,
                // 要倒者写，只有一个的话不用写数组，直接写
                use: ['style.loader', 'css-loader']
            },
            // less 
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //html 
            {
                // 如果是一个片段的话用tpl
                test: /\.(html|tpl)$/,
                use: ['html-loader']
            },
            //静态资源引用
            {
                //音频，视频都可以配
                test: /\.(png|jpeg|gif|jpg|svg|mp3)/,
                //小东西转 base64 编码
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }
                    // 小于10KB打包
                ]
            },
            //js
            {
                test: /\.js$/,
                use: ['babel-loader'],
                //排除一些JS文件，比如node_modules
                exclude: path.resolve(__dirname, 'node_modules')
            },
            //vue
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}