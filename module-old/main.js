const greeting = require("./hello.js");
const helloforname = require("./HelloForName.js");
function main() {
  //llamar a la funcion hello
  console.log(greeting());
  // greeting();
  console.log(helloforname("facu"));
}
main();
