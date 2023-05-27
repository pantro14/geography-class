import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-continent-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continent-details.component.html',
  styles: [
  ]
})
export class ContinentDetailsComponent implements OnInit, OnDestroy{
  private routeSub: Subscription;
  code: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.code = params['code'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
