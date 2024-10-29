import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  isAlertOpen = false;
  isCardOpen = false;

  alertButtons = ['OK'];

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
    this.isCardOpen = isOpen; // Tampilkan kartu saat alert dibuka
  }
}
