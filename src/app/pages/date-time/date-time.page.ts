import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDay: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
          console.log('Clicked Save!');
          console.log(event);
          console.log(event.day.value);
          console.log(event.month.value);
          console.log(event.year.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
  };
  }

  changeDate(event){
    console.log('Birthday' + this.birthDay);
    console.log('Birthday' + event);
    console.log('DATE ' + new Date(event.detail.value));
  }
  
}
