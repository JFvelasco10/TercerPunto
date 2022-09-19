import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'decoradorTituloEntrada'})
export class DecoradorTituloPipe implements PipeTransform {
  transform(value: string): string {
    return value.split("_")[0];
  }
}