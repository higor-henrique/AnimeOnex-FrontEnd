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
  
 
}



}