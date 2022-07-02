import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward("/home")
  }

}
