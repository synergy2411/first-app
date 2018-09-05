import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "countryCode"
})
export class CountryCodePipe implements PipeTransform{

    transform(value : number, countryName : string) :  string{
        if(countryName == "US"){
            return "+1 " + value;
        }else if (countryName == "IND"){
            return "+91 " + value;
        }else{
            return value.toString();
        }
        
    }
}