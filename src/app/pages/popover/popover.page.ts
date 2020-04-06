import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async mostartPop(evento){
    const popover = await this.popoverController.create({
      component: PopinfoComponent, event: evento, mode: 'ios', backdropDismiss: false
      // event: ev,
      // translucent: true
    });
    await popover.present();

    // 2 formas: para despues de que cierre y para cuando cierre
    // const {data} = await popover.onDidDismiss();
    const {data} = await popover.onWillDismiss();

    console.log('Padre: ', data);
  }

}
