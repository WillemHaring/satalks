// sync order with functions and work with async await

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
});


async function doWork(message, duration)
{
    const unitofWork = 1000;
    console.log(`work for ${message} for has started `);
    return await setAsyncTimeout(() => {
        console.log(`${message} for ${duration} days has completed`);
    }, duration * unitofWork);
}

async function startEvaluation()
{
    return doWork("1. start evaluation", 2);
}

async function discovery()
{
    return doWork("2. discovery", 3);
}

async function solutionPortfolioWorkshop()
{
    return doWork("3. solution portfolio workshop", 4);
}

async function valueWorkshop()
{
    return doWork("4. value workshop",2);
}

async function customerSuccessWorkshop()
{
    return doWork("5. customer success workshop", 1);
}

async function pov()
{
    return doWork("6. POV", 4);
}

async function descission()
{
    return doWork("7. decision", 1);
}

async function evaluation()
{
     await startEvaluation();
     await discovery();
     await solutionPortfolioWorkshop();
     await valueWorkshop();
     await customerSuccessWorkshop();
     await pov();
     await descission();
}

console.log("starting");
evaluation();
console.log("done");