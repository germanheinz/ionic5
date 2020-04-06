import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { Components } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Components[]>;

  constructor(private dataService: ServiceService) { }

  ngOnInit() {
    // Si dejo esta peticion a servicios genera un error
    // porque no le estoy especificando en Service, que retorna
    this.componentes = this.dataService.getMenuOpts();
  }



}
