import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<Components[]>;

  constructor(private menuController: MenuController, private dataService: ServiceService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}