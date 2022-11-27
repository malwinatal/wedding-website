import { Companions } from './Companions';

export class Account {
  constructor(
    public id: string,
    public name: string,
    public invitationNameEn: string,
    public invitationNamePl: string,
    public invitationNamePt: string,
    public code: string,
    public companions: Companions,
    public count: number
  ) {}
}
