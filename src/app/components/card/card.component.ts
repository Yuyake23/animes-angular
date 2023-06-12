import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/interfaces/Anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() anime!: Anime

}
