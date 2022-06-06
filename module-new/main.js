import hello from "./hello.js";
// import { helloforname as holaporName } from "./helloForName.js";

import { helloforname } from "./helloForName.js";

const main = () => {
  console.log(hello);
  console.log(hello());

  console.log(helloforname("lea"));
};

main();
