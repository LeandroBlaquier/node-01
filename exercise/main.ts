import createClub from "./create/index";
// import { ProductControllerOptions, ProductController } from "./controller";

const main = (): any => {
  console.log("hola soy Typescript");
  // return "hola soy Typescript";
  const msg = createClub(2, "sacachispas");
  console.log(msg);
  // return msg;
};

main();
