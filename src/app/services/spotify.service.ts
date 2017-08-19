import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  tokenAcceso = 'Bearer BQBF68o0MIYGX2bFF_TAXUN-wR9JxaFVrUhpPm0pCBfxIPKgLD-r82Qu2OL4h3OGNB9BH8nHqGZR4Iwb0msWcg';

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
        return this.artistas = res.json();
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
        return this.artistas = res.json().tracks;
      });
  }

}
