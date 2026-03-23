import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Img } from "./components/img/img";
import { ProductComponent } from "./components/product/product"
import { Product } from './models/product.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Img, ProductComponent, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imgParent = ''
  products: Product[] = [

    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://static.platzi.com/media/user_upload/toy-a0d1c980-a8ce-4fa4-83d6-3b016999a162.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://static.platzi.com/media/user_upload/bike-143dcfe9-3190-49fd-88f7-d3bf74182072.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://static.platzi.com/media/user_upload/books-80160e05-d177-420b-89c5-01a97b2bdb76.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://static.platzi.com/media/user_upload/album-6f4213d5-1d2d-4e0f-96fe-edb36c3255b4.jpg'
    },
    {
      id: '5',
      name: 'Casita michi',
      price: 125,
      image: 'https://static.platzi.com/media/user_upload/house-034b0c04-eeff-42fa-b506-79f18f73ff90.jpg'
    },
    {
      id: '6',
      name: 'Lentes vintage',
      price: 82,
      image: 'https://static.platzi.com/media/user_upload/glasses-05350737-5831-4c98-be55-824399206dba.jpg'
    },

  ];

  onLoaded(img: string) {
    console.log('log padre', img);
    
  }
}
