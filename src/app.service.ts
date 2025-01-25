import { Injectable } from '@nestjs/common';
import { Res } from './app.helper';

@Injectable()
export class AppService {
  getWordsCombinations(text: string): Res {
    const textWithoutSpaces = this.transformString(text);
    const textByTable = this.getTextByTable(textWithoutSpaces, 20);
    return new Res(textWithoutSpaces, textByTable);
  }

  private transformString(input: string): string {
    return input
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, '') // Remove all spaces
      .replace(/ך/g, 'כ') // Replace ך with כ
      .replace(/ם/g, 'מ') // Replace מ with ם
      .replace(/ן/g, 'נ') // Replace ן with נ
      .replace(/ף/g, 'פ') // Replace ף with פ
      .replace(/ץ/g, 'צ')
      .replace(/[^א-ת]/g, ''); // Replace ץ with צ
  }

  private getTextByTable(text: string, lineLength: number): string[] {
    const table: string[] = [];
    const textLength = text.length;
    let start = 0;
    let end = lineLength;
    let stoper = true;
    while (stoper) {
      let line = '';
      if (end >= textLength - 1) {
        stoper = false;
        line = text.slice(start);
      } else {
        line = text.slice(start, end);
        start += lineLength;
        end += lineLength;
      }
      table.push(line);
    }

    return table;
  }
}
