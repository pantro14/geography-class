import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacadeService} from '../../services/facade/facade.service';
import {LetDirective} from '@ngrx/component';
import {ShimmerComponent} from '../../common/shimmer/shimmer.component';

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [CommonModule, LetDirective, ShimmerComponent],
  templateUrl: './continents.component.html',
  styles: [
  ]
})
export class ContinentsComponent implements OnInit {
  readonly continents$ = this.facade.continents$;

  constructor(private facade: FacadeService) {
  }
  ngOnInit() {
    this.facade.fetchContinents();
  }
}
