import * as express from 'express';
import {ValueProvider} from '@angular/core';
import {renderModuleFactory} from '@angular/platform-server';
import {join} from 'path';
import {readFileSync} from 'fs';

import * as xhr2 from 'xhr2';
xhr2.prototype._restrictedHeaders.origin = false;

// Load zone.js for the server.
require('zone.js/dist/zone-node');
require('reflect-metadata');
const AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;


const template = readFileSync('./dist/index.html', { encoding: 'utf8' });

// Render to HTML and log it to the console.
// renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'}).then(html => console.log(html));

const app = express();

app.engine('html', (_, options, callback) => {
    const opts = {
        document: template, url: options.req.url, extraProviders: [
            <ValueProvider>{
                provide: 'REQUEST',
                useValue: options.req,
            }]
    };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.render('index', {req});
});

app.listen(5000, () => {
    console.log(`listening on http://localhost:5000!`);
});