import createClub from "./create/index";
// import { ProductControllerOptions, ProductController } from "./controller";
import { findAll, findOne } from "./search/";

const main = (): any => {
  const msg = createClub(2, "sacachispas");
  console.log(msg);
  // console.log(findAll());
  console.log(findOne(2));
};

main();
