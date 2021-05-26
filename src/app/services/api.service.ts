import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Album, ArtistAndAlbums } from '../interfaces/Album.interface';
import { Artist } from '../interfaces/Artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  searchArtist(term:string):Promise<Artist[]>{
    return this.http.get<Artist[]>(environment.apiUrl+'/deezer/search/' + encodeURIComponent(term)).toPromise()
  }

  artistById(id:number):Promise<ArtistAndAlbums>{
    return this.http.get<ArtistAndAlbums>(environment.apiUrl+'/deezer/artist/'+id).toPromise()
  }
  albumById(id:number):Promise<Album>{
    return this.http.get<Album>(environment.apiUrl+'/deezer/album/'+id).toPromise()
  }
}
