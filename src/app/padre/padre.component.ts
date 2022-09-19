import { Component, Input, OnInit } from '@angular/core';
import Entrada from '../modelos/Entrada.model';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @Input()
  entrada!: Entrada;

  constructor() { }

  ngOnInit(): void {
  }
}