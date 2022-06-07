import { clubes } from "../create";

export const findOne = (id: Number) => {
  return clubes.find((i) => i.id === id);
};
