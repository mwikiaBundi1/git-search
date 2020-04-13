import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateCount"
})
export class DateCountPipe implements PipeTransform {
  today: number = Date.now();
  transform(value: any, args?: any): any {
    return null;
  }
}
