## NPM
![alt text](https://cdn.iconscout.com/icon/free/png-256/npm-226037.png "Logo Title Text 1")

[back](../../readme.md)

**to initialize a project**
`npm init`

**add a module to my project**
`npm i chalk`

please note that there now is a node_modules folder that contains all dependencies for this project! You can just delete this folder, the 'recepe' is in package.json

**create a file called index.js and add the following content**
```javascript
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.green("and in green"));
```

**run this example by typing in the following command:**
`node index.js`

**now lets include this in our project, so everyone undestands how to run this**
add the following line to the scripts section in project.json:
`"start": "node index.js"`

**now run this with:**
`npm run start`

**installing things globaly, so you can allways use them**
`npm install -g typescript` allows you to install typescript globally so you can use it in every project

**installing as a dev dependency**
`npm install typescript --save-dev` now becomes a tool in just your project, but, it will not be part of the actual build of that project