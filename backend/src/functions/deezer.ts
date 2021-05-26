import axios from 'axios';

export class Deezer{
    baseUrl:string = 'https://api.deezer.com' as const;

    searchArtist(term:string){
        return axios.get(this.baseUrl+'/search/artist?q='+decodeURIComponent(term))
    }

    getAlbumById(id:string){
      return axios.get(`${this.baseUrl}/album/${id}`);
    }

    getArtistById(id:string){
        return axios.get(`${this.baseUrl}/artist/${id}`)
        .then(async (result:any)=>{
          let artist = result.data
          let albumData:any;
          try{
            albumData = await axios.get(`${this.baseUrl}/search/album?q=${artist.name}`)
          }catch(err){throw err};
          const {data:{data}} = albumData;
          const albumObject = {albums:data}
          artist = {...artist,...albumObject}
          return artist;
        })
    }

}
