import { Component, Input, OnInit } from '@angular/core';
import Entrada from '../modelos/Entrada.model';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  entradaTarjeta!: Entrada;
  public readonly hijo: Entrada[] = [
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/03/01/20/08/spray-can-7041935__340.jpg',
      imageName: 'bart simpson_10236584',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/01/14/20/27/fan-art-1140718__340.png',
      imageName: 'casa simpson_95647521',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/03/26/12/34/simpsons-4082521__340.jpg',
      imageName: 'familia sipmson_36584218',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}