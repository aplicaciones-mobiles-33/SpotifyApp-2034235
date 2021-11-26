import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  @ViewChild(IonTabs) tabs:IonTabs;
  seleccionar='';
  progress ='43'
  seleccionarTab() {
    console.log('Funcion llamada');
    this.seleccionar = this.tabs.getSelected();
  }

}
