import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, public screenOrientacion: ScreenOrientation) {
    // Bloqueo la pantalla de forma horizontal
    this.screenOrientacion.lock(this.screenOrientacion.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit(){

  }

  datos(){
    this.navCtrl.navigateForward("/datos")
  }
  
  formacion(){
    this.navCtrl.navigateForward("/formacion")
  }

  habilidades(){
    this.navCtrl.navigateForward("/habilidades")
  }

  experiencia(){
    this.navCtrl.navigateForward("/experiencia")
  }

  idiomas(){
    this.navCtrl.navigateForward("/idiomas")
  }

  conocimientos(){
    this.navCtrl.navigateForward("/conocimientos")
  }

  
}
