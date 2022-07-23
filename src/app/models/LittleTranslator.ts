export class LittleTranslator {
  constructor(
    public en: string,
    public pl: string,
    public pt: string
  ) {}
  [key: string]: string;
}
