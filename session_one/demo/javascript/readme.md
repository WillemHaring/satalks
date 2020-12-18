#Javascript

![alt text](https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png "Logo Title Text 1")

[back](../../readme.md)

### equals
take care when you use the =, == or === in an if statement, they do not do the same thing!

[working with if equality](equals.js)

### desired execution

a perfect sales cycle looks like this and should be executed in this order:
```javascript
startEvaluation();
discovery();
solutionPortfolioWorkshop();
valueWorkshop();
customerSuccessWorkshop();
pov();
descission();
```

You can actually program this out in javascript and visualize the evaluation

[evaluation](evaluation.js)

`node evaluation.js`

In the example above all the steps are nicely executed in the right order, in real life, each step might have another duration and a sales person (*) would like to kick it off all at once, but then we get chaos like this:

[evaluation with where work takes time](evaluationwithwork.js)

`node evaluationwithwork.js`

What you see is that the results all come back completely out of order, this is one of the challenges when it comes to the asynchronous nature of javascript. Also known as callback hell.

There are a couple of things you can do about this:

[evaluation with callbacks](evaluationwithworkandcallback.js)

`node evaluationwithworkandcallback.js`

Allthough this works, it becomes really hard to work with. async and promises to the rescue

[evaluation with async](evaluationwithworkasync.js)

`node evaluationwithworkasync.js`