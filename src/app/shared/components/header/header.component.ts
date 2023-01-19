import { Component } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeBooks();
  }

  onFetchData() {
    // this.dataStorageService.fetchBooks().subscribe();
  }
}
