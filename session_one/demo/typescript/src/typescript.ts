var globalsettings = require('../package.json');

class myclass
{
    constructor()
    {
        console.log('creating myclass)');
    }

    print(message: string, counter: string)
    {
        console.log(`this is ${message} with number ${counter}`);
    }
}

console.log(`version: ${globalsettings.version}`);
let c = new myclass();
c.print("friday", "this is a string");