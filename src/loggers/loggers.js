import log4js from 'log4js';

log4js.configure({
    appenders: {
        consola:{type:'console'},
        archivoErrores:{type:'file', filename:'./src/logs/errors.log'},
        loggerConsola:{type:'logLevelFilter', appender:'consola', level:'info'},
        loggerErrores:{type:'logLevelFilter', appender:'archivoErrores', level:'error'}
    },
    categories: {
        default: {appenders: ['loggerConsola', 'loggerErrores'], level:'all'},
        production:{appenders:['loggerErrores'], level:'all'}
    }
});

export const logger = log4js.getLogger();

