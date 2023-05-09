import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing'
})
export class TestingPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const a = args[0]
    const b = args[1]

    let result = value;
    if (a) {
      result = result * a;
    }
    
    if (b) {
      result = result + b
    }
    
    return result;
  }
}