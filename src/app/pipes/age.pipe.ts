import { Pipe, PipeTransform } from '@angular/core';
import { setFullYear } from 'ngx-bootstrap/chronos/utils/date-setters';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(age: number): Date {
    const today = Date.now();
    const now = new Date();
    const birthday = new Date().setFullYear(now.getFullYear() - age);
    return new Date(birthday);
  }

}
