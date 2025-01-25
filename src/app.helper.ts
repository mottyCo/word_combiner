export class Res {
  constructor(text: string, textByTable: string[]) {
    this.textWithoutSpaces = text;
    this.textLength = text.length;
    this.textByTable = textByTable;
  }
  textLength!: number;
  textWithoutSpaces!: string;
  textByTable!: string[];
}
