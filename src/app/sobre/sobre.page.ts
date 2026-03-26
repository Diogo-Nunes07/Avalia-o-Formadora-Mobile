import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // 1. IMPORTANTE: Adicione esta linha
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton,
    CommonModule, 
    FormsModule,
    RouterModule // 2. IMPORTANTE: Adicione aqui para o routerLink funcionar
  ]
})
export class SobrePage implements OnInit {
  constructor() { }
  ngOnInit() { }
}