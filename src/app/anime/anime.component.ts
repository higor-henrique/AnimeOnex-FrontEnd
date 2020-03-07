import { Component, OnInit } from '@angular/core';
import { AnimeService  } from "src/core/anime/anime.service";
import { Anime } from "src/models/anime.model"

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Anime[];
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {


    this.carregarAnime();
    console.log(this.animes);
    console.log("rte");
  }
  carregarAnime() {
    this.animeService.get()
    .subscribe(response => {
      this.animes = response;
    });

  }

}
