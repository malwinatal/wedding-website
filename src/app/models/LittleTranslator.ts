export class LittleTranslator {
  constructor(
    public gb: string,
    public pl: string,
    public pt: string
  ) {}
  [key: string]: string;
}
