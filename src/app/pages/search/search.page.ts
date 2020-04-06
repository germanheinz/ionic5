import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any [] = [];
  text: '';

  constructor(private dataService: ServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(resp => {
      console.log(resp);
      this.albums = resp;
    });
  }

  buscar(event){
    console.log(event);
    console.log('resp' + event.detail.value);
    this.text = event.detail.value;

  }

}
