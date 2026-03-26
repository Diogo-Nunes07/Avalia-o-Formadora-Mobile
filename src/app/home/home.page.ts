import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Adicione este import
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton,
    RouterModule // 2. Adicione aqui na lista de imports
  ],
})
export class HomePage {
  constructor() {}
}