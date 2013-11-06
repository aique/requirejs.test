({
    appDir: "../app",
    baseUrl: "..",
    mainConfigFile: '../common.js',
    paths: {
        controllers: 'app/controllers',
        services: 'app/services',
        data: 'app/data',
        model: 'app/model',
        views: 'app/views',
        templates: 'app/templates',
        jquery: "lib/jquery"
    },
    modules:
    [
        {
            name: "common"
        },
        {
            name: "index",
            exclude: ["common"]
        },
        {
            name: "order",
            exclude: ["common"]
        }],
    fileExclusionRegExp: /\.ts|\.js.map$/,
    dir: "dist"
})