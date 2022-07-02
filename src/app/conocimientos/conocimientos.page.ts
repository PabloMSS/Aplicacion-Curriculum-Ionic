import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.page.html',
  styleUrls: ['./conocimientos.page.scss'],
})
export class ConocimientosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  volver(){
    this.navCtrl.navigateForward("/home")
  }

}
