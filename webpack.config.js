const path=require('path')
const rootdir=path.join(__dirname,'src/')
const {VueLoaderPlugin}=require('vue-loader')
const HTMLPlugin=require('html-webpack-plugin')
const webpack=require('webpack')

const isDev= process.env.NODE_ENV === 'development'
const config={
    target:'web',
    entry:path.join(rootdir,'index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'postcss-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-aa.[ext]'
                        }
                    }
                ]
            }
        ]
    },

    // defiplugin会判断各种包来优化 ，webpack4已经默认处理
    plugins:[
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         NODE_ENV:isDev ? '"development"':'"production"'
        //     }
        // }),
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
}

if(isDev){
    // 使打包后的代码错误信息映射到原码上
    config.devtool='#cheap-module-eval-source-map'

    // overlay里面的error显示错误信息
    config.devServer={
        port:1000,
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        hot:true
    }
    // 第一个启动热加载替换
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports=config