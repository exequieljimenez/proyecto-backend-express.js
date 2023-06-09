import app from './server.js'
import { logger } from './loggers/loggers.js';
import options from './config/options.js';

const PORT = options.server.port || 8080;

const server = app.listen(PORT, () => {
    logger.info(`Server listening on port ${server.address().port}`)
});

server.on('error', error => logger.error(`Server error: ${error}`))