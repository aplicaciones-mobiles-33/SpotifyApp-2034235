import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchSong: any;

  data2 =[
    {
      title: 'Recientemente escuchadas',
      albums: recentlyPlayed
    },
    {
      title: 'Rotacion Pesada',
      albums: heavyRotation
    },
    {
      title: 'Musica para saltar',
      albums: jumpBackIn
    }
    ];


  constructor() {}

    search(event) {
    const text = event.target.value;
    this.searchSong = this.data2;
    if(text && text.trim() != ''){
      this.searchSong = this.searchSong.filter((canciones: any)=>(canciones.name.toLowerCase().indexOf(text.toLowerCase())) > -1);
    }
  };
}
