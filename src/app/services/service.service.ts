import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Components } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    // Agrego al get pico Components para indicarle que tipo va a devolver
    return this.http.get<Components[]>('/assets/data/menu.json');
  }


}
