import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [],
  templateUrl: './img.html',
  styleUrl: './img.scss',
})
export class Img {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/images/default.png';

  imgloaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
