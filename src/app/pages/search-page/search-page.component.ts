import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../../interfaces/Artist.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchTerm:string = "";
  searched:boolean = false;
  debounce:any;
  $artists = new BehaviorSubject<Artist[] | null>(null);
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {

  }
  setState(artists:Artist[] | null){
    this.$artists.next(artists);
  }

  openArtist(id:number){
    this.router.navigate(['deezer','album',id])
  }

  search(){
    clearTimeout(this.debounce)
    let search = this.searchTerm;
    let self = this;
    this.debounce = setTimeout(async ()=>{
      try{
        self.searched = true;
        let artists = await this.api.searchArtist(search);
        self.setState(artists);
      }catch(err){
        console.error("Error Fetching Artists",err.message);
      }
    },500);
  }

}
