//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //配置html模版
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清除上次打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //拆分css  同样也可以拆分多个css
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'../src/main.js'),
        header: path.resolve(__dirname,'../src/header.js'),
    }, //入口文件
    // entry: ["@babel/polyfill",path.resolve(__dirname,'../src/index.js')], //
    output: {
        filename: '[name].[hash:8].js',    //打包后文件名称
        path: path.resolve(__dirname,'../dist')  //打包后的目录
    },
    plugins: [  //插件配置
        new CleanWebpackPlugin(), //清除上次打包文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            filename: 'index.html',
            chunks: ['main']  //(与入口文件对应的模块名)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/header.html'),
            filename: 'header.html',
            chunks: ['header']  //(与入口文件对应的模块名)
        }),
        require('autoprefixer'), //引用改插件
        new MiniCssExtractPlugin({   //拆分css
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader',{  //为css添加浏览器前缀
                    loader:'postcss-loader',
                    options:{
                        plugins:[require('autoprefixer')]
                    }
                }] //从右向左解析原则
            },
            //打包图片、字体、媒体、等文件
            {
                test:/\.(jep?g|png|gif)$/i, //图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            //配置babel
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}