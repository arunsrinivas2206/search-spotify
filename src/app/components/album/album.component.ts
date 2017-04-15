import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: `album.component.html`,
})
export class AlbumComponent implements OnInit {
	id:string;
	album:Album[];

	constructor(private spotifyService:SpotifyService, private _route:ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params.map(params => params['id']).subscribe(id => {
			this.spotifyService.getAlbum(id).subscribe(album => {
				console.log(album);
				this.album = album;
			})
		});
	}
 }
