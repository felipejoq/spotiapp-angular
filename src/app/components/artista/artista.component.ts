import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any;
  topCanciones:any[] = [];
  loading:boolean;

  constructor(private _router: ActivatedRoute, private _spotify: SpotifyService) {
    this.loading = true;
    this._router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopCanciones(params['id']);
    });
  }

  getArtista(id:string){
    this.loading = true;
    this._spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopCanciones(id:string){
    this._spotify.getTopCanciones(id).subscribe(topCanciones => {
      this.topCanciones = topCanciones;
      console.log(topCanciones);
    })
  }


}
