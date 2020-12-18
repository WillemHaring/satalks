function demo(presenters) {
    console.log(`Hello, this is a demo presentation by ${presenters}, please enjoy!`);
  }
  
  function introductionMeeting(seller, solutionArch, callback) {
    const presenters = `${seller} and ${solutionArch}`;
  
    callback(presenters);
  }
  
  introductionMeeting('Kevin','Olaf', demo); 

  console.log("Introduction call");

setTimeout(function() {
  console.log("make sure we do the right demo and remove all obstacles")
},3000);

console.log("Close the deal");

// sync order
console.log("1. start evaluation");
console.log("2. discovery");
console.log("3. solution portfolio workshop");
console.log("4. value workshop");
console.log("5. customer success workshop");
console.log("6. POV");
console.log("7. decision");

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

startEvaluation();
discovery();
solutionPortfolioWorkshop();
valueWorkshop();
customerSuccessWorkshop();
pov();
descission();