import { Component, OnInit, Input } from '@angular/core';
import { Episodio } from 'src/app/models/episodio.model';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.css']
})
export class CardVideoComponent implements OnInit {
  
  @Input() episodio : Episodio;
  
  constructor() { }

  ngOnInit(): void {
  }

  caminhonull(episodio: Episodio) {
    if(episodio.caminhoDoArquivo == "") {      
      return true;
    }
    else {
      return false;
    }
  }


}
