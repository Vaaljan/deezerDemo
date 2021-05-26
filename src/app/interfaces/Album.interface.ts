import { Artist } from "./Artist.interface";


  export interface AlbumSummary {
      id: number;
      title: string;
      link: string;
      cover: string;
      cover_small: string;
      cover_medium: string;
      cover_big: string;
      cover_xl: string;
      md5_image: string;
      genre_id: number;
      nb_tracks: number;
      record_type: string;
      tracklist: string;
      explicit_lyrics: boolean;
      artist: Artist;
      type: string;
  }

  export interface ArtistAndAlbums extends Artist{
    albums:AlbumSummary[]
  }

    export interface Datum {
        id: number;
        name: string;
        picture: string;
        type: string;
    }

    export interface Genres {
        data: Datum[];
    }

    export interface Contributor {
        id: number;
        name: string;
        link: string;
        share: string;
        picture: string;
        picture_small: string;
        picture_medium: string;
        picture_big: string;
        picture_xl: string;
        radio: boolean;
        tracklist: string;
        type: string;
        role: string;
    }

    export interface Artist2 {
        id: number;
        name: string;
        tracklist: string;
        type: string;
    }

    export interface Datum2 {
        id: number;
        readable: boolean;
        title: string;
        title_short: string;
        title_version: string;
        link: string;
        duration: number;
        rank: number;
        explicit_lyrics: boolean;
        explicit_content_lyrics: number;
        explicit_content_cover: number;
        preview: string;
        md5_image: string;
        artist: Artist2;
        type: string;
    }

    export interface Tracks {
        data: Datum2[];
    }

    export interface Album {
        id: number;
        title: string;
        upc: string;
        link: string;
        share: string;
        cover: string;
        cover_small: string;
        cover_medium: string;
        cover_big: string;
        cover_xl: string;
        md5_image: string;
        genre_id: number;
        genres: Genres;
        label: string;
        nb_tracks: number;
        duration: number;
        fans: number;
        rating: number;
        release_date: string;
        record_type: string;
        available: boolean;
        tracklist: string;
        explicit_lyrics: boolean;
        explicit_content_lyrics: number;
        explicit_content_cover: number;
        contributors: Contributor[];
        artist: Artist;
        type: string;
        tracks: Tracks;
    }

