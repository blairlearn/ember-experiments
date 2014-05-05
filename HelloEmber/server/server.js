// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    httpProxy = require("http-proxy"), //added to proxy service requests
    port = (process.env.PORT || 8001),
    server = module.exports = express();

//Proxy options below are to proxy service requests
var proxy = new httpProxy.RoutingProxy();


// SERVER CONFIGURATION
// ====================
server.configure(function () {

    server.use(express["static"](__dirname + "/../public"));

    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));


    server.use(server.router);
});

// SERVER
// ======

//Added to proxy request
server.all('/TermDictionary.svc/*', function(req, res) {
    var prxReq = proxy.proxyRequest(req, res, {
        host: 'www.cancer.gov',
        port: 80,
        changeOrigin: true
    });

    return prxReq;
});

// Start Node.js Server
http.createServer(server).listen(port);

console.log('Welcome to MRB-Lite!\n\nPlease go to http://localhost:' + port + ' to start using Marionette, Require.js and Backbone.js');