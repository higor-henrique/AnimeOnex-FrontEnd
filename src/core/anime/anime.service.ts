import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Anime } from 'src/app/models/anime.model'
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AnimeService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:44343/api/Anime/3";
   }


  //  get(): Observable<Anime[]> {

  //   return this.http.get<Anime[]>(
  //     this.url).map((response: Anime[]) =>
  //       response);

        

  // }
  
  get (): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.url)
      .pipe(
        
      );
  }


  // getById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.url}/id=${id}`)
  //     .map((response: any) => response);
  // }
  
}










  

