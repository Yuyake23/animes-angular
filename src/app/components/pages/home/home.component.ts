import { Component } from '@angular/core';
import { Anime } from 'src/app/interfaces/Anime';
import { AnimeServiceService } from 'src/app/services/anime-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  animes!: Anime[]
  genhres: String[] = []

  // animesByGenhre: { [key: string]: Anime[] } = {};

  constructor(animeService: AnimeServiceService) {
    this.animes = animeService.getAnimes()

    this.animes.forEach(a => {
      a.genhres.forEach(g => {
        if (!this.genhres.includes(g)) {
          this.genhres.push(g)
        }
      })
    });

    this.genhres.sort()

  }

}
