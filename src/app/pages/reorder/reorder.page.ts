import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  heroes = ['Batman', 'Superman', 'Ironman', 'Linterna Verde'];

  constructor() { }

  ngOnInit() {
  }
  reorder(event){
    event.detail.complete(true);
    const itemRemoved = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, itemRemoved);
    console.log(event);
  }
  onClick(){
    console.log(this.heroes);
  }

}
