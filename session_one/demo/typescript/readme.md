#Typescript

![alt text](https://cdn.iconscout.com/icon/free/png-256/typescript-1-1175078.png "Logo Title Text 1")

[back](../../readme.md)

this is a good [typescript tutorial](https://www.typescriptlang.org/)

**install typescript:**

`npm install -g typescript` this installs typescript globally, so every project can use it.

Write a simple typescript application: 
- Create a new file called typescript.ts
- paste the following code into it:

```typescript

var globalsettings = require('../package.json');

class myclass
{
    constructor()
    {
        console.log('creating myclass)');
    }

    print(message: string, counter: number)
    {
        console.log(`this is ${message} with number ${counter}`);
    }
}

console.log(`version: ${globalsettings.version}`);
let c = new myclass();
c.print("friday", 6);
```
- ~~compile~~ transpile it with `tsc typescript.ts`
- this will create a `typescript.js` file
- run this with `node typescript.js`

## a bit more structure

- configure typescipt in a better way
- run `tsc --init --outdir ./dist/ --rootDir ./src/`
- this creates a `tsconfig.json` file where `tsc` is looking for sources in the `src` folder, compiles them to the `dist` folder
- create a `src` folder 

```sh
mkdir src
```

- move `typescript.ts` to the src folder and delete `typescript.js`

```sh
mv typescript.ts ./src
unlink typescript.js
```

now run tsc in watch mode `tsc -w` this makes the ~~compiler~~ transpiler run everytime you save a file.


## watch compile and run
- setup npm with `npm init`

instead of only watching changes, it would be great if on each change, the file is compiled and automatically run again!

- install `nodemon` with `npm install --save-dev nodemon` this installs the package as a development dependance, so it will not end up in your final solution
- add the following lines to the `script` section of `package.json`:

```javascript
    "start": "tsc && node ./dist/typescript.js",
    "watch-and-run": "tsc -w & nodemon -q -w dist dist/typescript.js"
```
- now run: `npm run watch-and-run`

# Happy coding for christmas!!

![alt text](https://blog.hackerearth.com/wp-content/uploads/2014/12/CCM.png "coding marathon")


if you want to learn something over the holidays, check out [advent of code 2020](https://adventofcode.com/2020)