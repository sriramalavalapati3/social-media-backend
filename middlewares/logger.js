class Logger {
    constructor(){

    }
    
    info(message, location) {
       console.log(`${message} ----> ${location}`)
    }

    error(message, location) {
       console.error(`${message} ----> ${location}`)
    }

    debug(message, location) {
       console.debug(`${message} ----> ${location}`)
    }
}

const loggerInstance = new Logger();
module.exports = { logger: loggerInstance };
