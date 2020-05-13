var hai;
var dummy = "summaa";
console.log(hai);   // undefined
// console.log(hai1);  // hai1 not defined

function AccessVarOutside() {
  var insideVariable = "Inside Var";
  console.log('variable Defined outside: ' + dummy);
  console.log('variable Defined inside: ' + insideVariable);
}
AccessVarOutside();
console.log('varInsideIFstatement: ' + varInsideIFstatement);
// console.log('letInsideIFstatement: ' + letInsideIFstatement); not defined
if(true) {
  var varInsideIFstatement = "varInsideIFstatement"
  let letInsideIFstatement = "letInsideIFstatement"
}
console.log('varInsideIFstatement: ' + varInsideIFstatement);