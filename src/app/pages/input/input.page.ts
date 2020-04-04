import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {


  // Defino un objeto
   usuario = {
     name: '',
     email: '',
     password: ''
   }

  constructor() { }

  ngOnInit() {
  }

  submitTemplate(){
    console.log(this.usuario);
  }

}
