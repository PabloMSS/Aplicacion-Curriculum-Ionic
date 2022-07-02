import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.page.html',
  styleUrls: ['./formacion.page.scss'],
})
export class FormacionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  volver(){
    this.navCtrl.navigateForward("/home")
  }

}
