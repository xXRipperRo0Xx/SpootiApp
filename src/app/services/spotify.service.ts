import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  topTracks:any[] = [];
  artista:any[]=[];

  tokenAcceso = 'Bearer BQDtlbC19ztqDMRtrp_tWycMWUKoJUqeGN4hH0_YIo2LIPldYEl1gzGUcTTb2HQCelI9vFbfe5zsYtMz3_pC3w';

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = 'https://api.spotify.com/v1/artists'

  constructor(private http: Http) { }

  getArtistas( termino:string ) {

    let headers = new Headers();
    headers.append('authorization' , this.tokenAcceso );

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url , { headers })
      .map( res => {
        this.artistas = res.json().artists.items;
    });
  }

  getArtista( id: string ) {

    let headers = new Headers();
    headers.append('authorization' , this.tokenAcceso );

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url , { headers })
      .map( res => {
        console.log(res.json());
        return this.artista = res.json();
    });
  }

  getTopTracks( id: string ) {

    let headers = new Headers();
    headers.append('authorization' , this.tokenAcceso );

    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query ;

    return this.http.get( url , { headers })
      .map( res => {
        console.log(res.json().tracks);
        return this.topTracks = res.json().tracks;
      });
  }

}
