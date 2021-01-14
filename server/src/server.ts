import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import validator from 'express-validator';

import logging from './config/logging';
import config from './config/config';
import connect from './config/database';
import routes from './web/router/routes';

const NAMESPACE = 'Server';
const db: string = config.server.uri;
const app = express();

// Logging the request
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP -[${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP -[${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

// Parse the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rules of API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

// Routes
app.use(routes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({ message: error.message });
});

// Create the server
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));

// Connect db
connect(db);