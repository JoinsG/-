const serverIndex = require("./server/index");
const path = require("path");
const {
    config
} = require("process");

function resolve(dir) {
    console.log(__dirname);

    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: false, // 关闭eslint
    chainWebpack: (config) => {
        config.resolve.alias.set(
            "@utils", resolve('utils')
        )
    },
    configureWebpack: config => {
        config.resolve.extensions = ['.js', '.vue', '.json', '.ts']
    },
    devServer: { // 配置服务器
        port: 8888,
        open: false,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        before(app) {
            var User = require("./server/router/user")
            serverIndex(app);
            User(app)

        }
    },
}