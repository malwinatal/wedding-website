import { Diets } from "./Diets";

export class Guest {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public going: boolean,
    public diet: Diets | undefined,
    public allergies: Array<String>
  ) {}
}
