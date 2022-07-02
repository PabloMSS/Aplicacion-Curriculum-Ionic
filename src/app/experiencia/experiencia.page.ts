import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  volver(){
    this.navCtrl.navigateForward("/home")
  }

}
