import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacePipe'
})
export class SpacePipePipe implements PipeTransform {
  outstring=""
  transform(inpString:string): string {
    for (const letter of inpString) {
      this.outstring+=letter.replace('-',' ')
    }
    return this.outstring
  }

}
