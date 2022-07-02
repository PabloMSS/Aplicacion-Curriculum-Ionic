import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  volver(){
    this.navCtrl.navigateForward("/home")
  }

}
