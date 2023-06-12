import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/interfaces/Anime';
import { AnimeServiceService } from 'src/app/services/anime-service.service';

@Component({
  selector: 'app-genhre-list',
  templateUrl: './genhre-list.component.html',
  styleUrls: ['./genhre-list.component.css']
})
export class GenhreListComponent {

  @Input() genhre!: String

}
