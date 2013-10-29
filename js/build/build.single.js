({
    appDir: "../app",
    baseUrl: "..",
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
    [{
        name: "common"
    }],
    dir: "dist"
})