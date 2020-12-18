// sync order with functions

function startEvaluation()
{
    console.log("1. start evaluation");
}

function discovery()
{
    console.log("2. discovery");
}

function solutionPortfolioWorkshop()
{
    console.log("3. solution portfolio workshop");
}

function valueWorkshop()
{
    console.log("4. value workshop");
}

function customerSuccessWorkshop()
{
    console.log("5. customer success workshop");
}

function pov()
{
    console.log("6. POV");
}

function descission()
{
    console.log("7. decision");
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