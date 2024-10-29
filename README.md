Bagaimana cara untuk menambahkan Komponen di halaman Ionic? Jelaskan secara detail langkahnya

1. Menambahkan komponen ion-card dengan strukturnya card title, card subtitle, gambar, dan card content pada file folder.page.html
<div *ngIf="isCardOpen" class="centered-card">
      <ion-card class="gradient-card">
        <ion-card-header>
          <ion-card-title>EMMA SARKILLA</ion-card-title>
          <ion-card-subtitle>H1D022001</ion-card-subtitle>
        </ion-card-header>
        <ion-img src="assets/aku.png"></ion-img>
        <ion-card-content>TUGAS 6 PRAK PEMOB</ion-card-content>
      </ion-card>
    </div>
  </div>

2. Menambahkan style css untuk ion-card dengan mengubah warnanya menjadi  #feae00 dan #fded61 pada file folder.page.scss

.centered-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.gradient-card {
  --background: linear-gradient(45deg, #feae00, #fded61);
  width: 90%; /* Sesuaikan ukuran kartu */
  max-width: 400px; /* Batas maksimum agar kartu tidak terlalu besar */
  margin: auto;
}

3. Menambahkan komponen Ion Alert Inline Alerts untuk alert "click me" pada file folder.page.html
  <ion-button (click)="setOpen(true)">Click Me</ion-button>

4. Menambahkan komponen Ion Alert Inline Alerts untuk alert "click me" pada file folder.page.spec.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  alertButtons = ['Action'];
}

![click me](form_registrasi.png)