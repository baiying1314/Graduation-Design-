module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader',
            query: {
                presets: [['es2015'], ['react']]
            },
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    }
};