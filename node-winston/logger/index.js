import winston from "winston";
const {config} = winston;

winston.configure({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            timestamp: function() {
                return Date.now();
            },
            formatter: function(options) {
                // - Return string will be passed to logger.
                // - Optionally, use options.colorize(options.level, <string>) to
                //   colorize output based on the log level.
                return options.timestamp() + ' ' +
                    config.colorize(options.level, options.level.toUpperCase()) + ' ' +
                    (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        })
    ],
});

// var logger = new winston.Logger({
//     level: 'info',
//     transports: [
//         new (winston.transports.Console)(),
//         new (winston.transports.File)({ filename: 'somefile.log' })
//     ]
// });

// import pkg from 'winston';
// const {createLogger, format, level, transports} = pkg;
//
// const winstonInstance = createLogger({
//     defaultMeta: { service: 'Cuboids' },
//     format: format.combine(
//         format.colorize(),
//         format.timestamp({
//             format: 'YYYY-MM-DD HH:mm:ss',
//         }),
//     ),
//     transports: [
//         new transports.Console({
//             handleExceptions: true,
//             handleRejections: true,
//             level
//         }),
//     ],
//     exitOnError: false,
// });


export const appLogger = winston;
