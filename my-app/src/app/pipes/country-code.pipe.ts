import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: number, code : string = 'IND'): string {
      switch (code) {
        case "AUS":{
          return "+12 " + value
        }
        case "USA":{
          return "+1 " + value
        }
        case "IND":{
          return "+91 " + value
        }
        default: return "+91 " + value

      }
  }
}


// create a pipe to reverse the string

// return value.split('').reverse().join('')
