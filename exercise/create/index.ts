// interfaces: moldes que representan esctructuras de datos
export interface IClub {
  id: Number;
  name: String;
}
interface IResponse extends IClub {
  msg: string;
}
export const clubes: IClub[] = [];
const createClub = (id: Number, name: String): IResponse => {
  clubes.push({ id, name });
  return { msg: "cub created successfully", name, id };
};
export default createClub;
