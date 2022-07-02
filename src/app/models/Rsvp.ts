import { Diets } from "./Diets";

export class Rsvp {
  constructor(
    public accountId: string,
    public name: string,
    public surname: string,
    public going: boolean,
    public diet: Diets | undefined,
    public allergies: Array<String>
  ) {}
}
