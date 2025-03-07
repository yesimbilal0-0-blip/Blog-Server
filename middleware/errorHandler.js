const { constants } = require('../constants/constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "VALIDATION FAILED" , message: err.message ,stackTrace: err.stackTrace });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "NOT FOUND" , message: err.message ,stackTrace: err.stackTrace });
            break;
        
        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED" , message: err.message ,stackTrace: err.stackTrace });
            break;
        
        case constants.FORBIDDEN:
            res.json({ title: "FORBIDDEN" , message: err.message ,stackTrace: err.stackTrace });
            break;
    
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "SERVER ERROR" , message: err.message ,stackTrace: err.stackTrace });
            break;
        
        default:
            console.log("NO ERROR");
            break;
    }

};

module.exports = errorHandler;