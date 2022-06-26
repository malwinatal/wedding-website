import { Companions } from './Companions';

export class Account {
  constructor(
    public id: string,
    public invitationName: string,
    public code: string,
    public companions: Companions,
    public count: number
  ) {}
}
