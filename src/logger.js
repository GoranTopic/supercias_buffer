import chalk from 'chalk';

const colors = [
    'green',
    'yellow',
    'blue',
    'magenta',
    'red',
    'cyan',
    'gray',
    'greenBright',
    'yellowBright',
    'blueBright',
    'magentaBright',
    'redBright',
    'cyanBright',
]

let index = 0

const log = console.log;

const make_logger = (prefix='', color=null) => {
    //chose color, in not specified
    if(color === null)
        if(index >= colors.length)
            index = 0;
    color = colors[index++];
    // return logger function
    return (...args) => {
        let string = [ ...args ].map( obj => JSON.stringify(obj) ).join('');
        log( chalk[color](  prefix + string ) );
    }
}

export default make_logger;
