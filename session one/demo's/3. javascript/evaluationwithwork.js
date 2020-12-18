// sync order with functions and work

function doWork(message, duration)
{
    const unitofWork = 1000;
    console.log(`work for ${message} for has started `);
    
    // use setTimeout to simulate the time per task
    setTimeout(function() 
    {
        console.log(`${message} for ${duration} days has completed`);
    }, duration * unitofWork);
}

function startEvaluation()
{
    doWork("1. start evaluation", 2);
}

function discovery()
{
    doWork("2. discovery", 3);
}

function solutionPortfolioWorkshop()
{
    doWork("3. solution portfolio workshop", 4);
}

function valueWorkshop()
{
    doWork("4. value workshop",2);
}

function customerSuccessWorkshop()
{
    doWork("5. customer success workshop", 1);
}

function pov()
{
    doWork("6. POV", 4);
}

function descission()
{
    doWork("7. decision", 1);
}

function evaluation()
{
    startEvaluation();
    discovery();
    solutionPortfolioWorkshop();
    valueWorkshop();
    customerSuccessWorkshop();
    pov();
    descission();
}

console.log("starting");
evaluation();
console.log("done");