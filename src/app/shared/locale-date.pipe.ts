import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeDate'
})
export class LocaleDatePipe implements PipeTransform {

  transform(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

}
