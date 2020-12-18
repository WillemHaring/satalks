// sync order with functions and work

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
   }

function doWork(message, duration, callback)
{
    const unitofWork = 1000;
    console.log(`work for ${message} for has started `);
    setTimeout(function() 
    {
        console.log(`${message} for ${duration} days has completed`);
        if (isFunction(callback))  callback();
    }, duration * unitofWork);
}



function startEvaluation(callback)
{
    doWork("1. start evaluation", 2, callback);
}

function discovery(callback)
{
    doWork("2. discovery", 3, callback);
}

function solutionPortfolioWorkshop(callback)
{
    doWork("3. solution portfolio workshop", 4, callback);
}

function valueWorkshop(callback)
{
    doWork("4. value workshop",2, callback);
}

function customerSuccessWorkshop(callback)
{
    doWork("5. customer success workshop", 1, callback);
}

function pov(callback)
{
    doWork("6. POV", 4, callback);
}

function descission(callback)
{
    doWork("7. decision", 1, callback);
}






function evaluation()
{
    startEvaluation(() => {
        discovery(() => {  
            solutionPortfolioWorkshop(() => {      
                valueWorkshop(() => {          
                    customerSuccessWorkshop(() => {              
                        pov(() => {                  
                            descission()
                        })
                    })
                })
            })
        })
    });
}

console.log("starting");
evaluation();
console.log("done");