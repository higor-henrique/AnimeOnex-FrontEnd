import { Component, OnInit } from '@angular/core';
import { Episodio } from 'src/models/episodio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  episodios: Episodio[];
  constructor() { }

  ngOnInit(): void {

    this.episodios = [
      {
        animeID: 0,
        titulo: "titulo",
        vizualizacoes: 2,
        duracaoMin: 2,
        numeroDoEpisodio : 2
      },
      {
        animeID: 1,
        titulo: "titulo",
        vizualizacoes: 2,
        duracaoMin: 2,
        numeroDoEpisodio : 12
      },
      {
        animeID: 2,
        titulo: "titulo",
        vizualizacoes: 2,
        duracaoMin: 2,
        numeroDoEpisodio : 3
      },
      {
        animeID: 3,
        titulo: "titulo",
        vizualizacoes: 2,
        duracaoMin: 2,
        numeroDoEpisodio : 2
      },
      {
        animeID: 4,
        titulo: "titulo",
        vizualizacoes: 2,
        duracaoMin: 2,
        numeroDoEpisodio : 2
      }
    ]
  }

}
