"use strict";

class Logger{ 
    constructor(request, config){
        this.requestId = request ? request.requestId : '';
        this.verbosity = config ? (config.logVerbosity || Logger.Verbosity.Warning) : 100;
    }

    error(message){
        if(this.verbosity <= Logger.Verbosity.Error)
            write('ERROR', this.requestId, message);
    }

    warning(message){
        if(this.verbosity <= Logger.Verbosity.Warning)
            write('WARNING', this.requestId, message);
    }

    info(message){
        if(this.verbosity <= Logger.Verbosity.Info)
            write('INFO', this.requestId, message);
    }
}

function write(type, requestId, message){
    console.log('\x1b['+colors[type]+'m' + type + ':', 'RequestID: '  + requestId, '-', message, '\x1b[0m');
}

Logger.Verbosity = {
    "Info": 1,
    "Warning": 2,
    "Error": 3,
}
var colors = {
    "INFO": 32,
    "WARNING": 33,
    "ERROR": 31,
};

module.exports = Logger;