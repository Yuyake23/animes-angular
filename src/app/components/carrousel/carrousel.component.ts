import { AnimeServiceService } from 'src/app/services/anime-service.service';
import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/interfaces/Anime';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {

  @Input() genhre!: String

  animesService!: AnimeServiceService
  animes!: Anime[]

  constructor(animeService: AnimeServiceService){
    this.animesService = animeService
  }

  getFirstThree(): Anime[] {
    this.animes = this.animesService.getAnimes().filter(a => a.genhres.includes(this.genhre))
    console.log(this.genhre, this.animes)
    return this.animes.slice(0, 3)
  }

  getOthers(): Anime[][] {
    let listaAgrupada: Anime[][] = [];
    let sublista: Anime[] = [];

    for (let i = 3; i < this.animes.length; i++) {
      sublista.push(this.animes[i]);

      if (sublista.length === 3) {
        listaAgrupada.push(sublista);
        sublista = [];
      }
    }

    // Adicione a última sublista, caso não tenha sido concluída
    if (sublista.length > 0) {
      listaAgrupada.push(sublista);
    }

    return listaAgrupada;
  }

}
