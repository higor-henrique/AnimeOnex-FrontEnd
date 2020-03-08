import { Component, OnInit, Input } from '@angular/core';
import { Episodio } from 'src/app/models/episodio.model';

@Component({
  selector: 'app-section-videos',
  templateUrl: './section-videos.component.html',
  styleUrls: ['./section-videos.component.css']
})
export class SectionVideosComponent implements OnInit {
  @Input() episodios: Episodio[];
  @Input() titulo: string;
  constructor() { }

  ngOnInit(): void {
  
  // this.episodios = [
  //   {
  //     animeID: 0,
  //     titulo: "Kyokou Suiri",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 9,
  //     caminhoDoArquivo: "assets/imgs/anime.jpg"
  //   },
  //   {
  //     animeID: 1,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 12,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 2,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 3,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 3,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 4,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 5,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID:6,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 7,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 8,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 9,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 10,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 11,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  //   {
  //     animeID: 12,
  //     titulo: "titulo",
  //     vizualizacoes: 2,
  //     duracaoMin: 2,
  //     numeroDoEpisodio : 2,
  //     caminhoDoArquivo: ""
  //   },
  // ]
}



}
