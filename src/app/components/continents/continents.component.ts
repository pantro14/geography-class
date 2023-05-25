import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoService} from '../../services/geo-service.service';

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continents.component.html',
  styles: [
  ]
})
export class ContinentsComponent implements OnInit {

  constructor(private geoService: GeoService) {
  }
  ngOnInit() {
    this.geoService.fetchContinents().subscribe({
      next: (continentQuery) => console.log(continentQuery.data.continents),
      error: (error) => console.error('error:', error),
      complete: () => console.info('complete')
    })
  }
}
