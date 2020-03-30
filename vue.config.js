module.exports = {
        devServer:{
            //设置一个主机地址
            host:'localhost' || '0.0.0.0',
            //设置前端的默认端口号
            port:8082,
            open:true,
            //设置代理
            proxy: {
                '/api':{
                    //设置后端目标api地址
                    target:'http://localhost:8085',
                    //如果要代理websockets
                    ws:true,
                    //跨域
                    changeOrigin:true,
                    pathRewrite:{
                        '^/api':'/'
                    }
                }
            }
        }
    }