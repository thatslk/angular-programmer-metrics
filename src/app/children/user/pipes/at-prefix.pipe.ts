import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'atPrefix',
})
export class AtPrefixPipe implements PipeTransform {
    transform(value: string) {
        return `@${value}`;
    }
}
