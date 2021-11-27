import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import albums from '../../assets/mockdata/albums';
@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

    data = null;
  constructor(private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];
  }

  /* openSong(t) {
    const titulo = encodeURIComponent(t.title);
    this.router.navigateByUrl(`/album/${titulo}`);
  } */

  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index){
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
