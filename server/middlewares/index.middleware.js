const path = require('path');
module.exports = function(app) {
    require(path.resolve('middlewares', 'proxy.middleware'))(app)
}