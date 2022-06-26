export class Account {
  constructor(
    public id: string,
    public invitationName: string,
    public code: string,
    public companions: number,
    public count: number
  ) {}
}
