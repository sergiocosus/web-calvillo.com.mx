const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './server.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    externals: [nodeExternals({
        whitelist: [
            /^@ng-bootstrap\/ng-bootstrap/,
            /^@ngrx/,
            /^angular2-notifications/,
            /^ngx-facebook/,
            /^ng2-adsense/,
            /^@agm/,
            /^ngx-sharebuttons/,
        ]
    })],
    node: {
        __dirname: true
    },
    output: {
        path: path.join(__dirname, 'dist-server'),
        filename: '[name]-webpack.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};