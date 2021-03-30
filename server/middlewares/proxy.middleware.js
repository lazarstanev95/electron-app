const httpProxy = require('http-proxy');
const path = require('path');
//
const proxy = httpProxy.createProxyServer({
    proxyTimeout: 60000
});
module.exports = function (app) {
    app.use('/proxy', function (req, res, next) {
        proxy.web(req, res, { target: 'https://api.openweathermap.org/data/2.5', changeOrigin: true}, function (e) {

        });
    });
}