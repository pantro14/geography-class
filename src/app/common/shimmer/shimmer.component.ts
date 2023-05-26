import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shimmer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-wrap mx-auto">
        <div class="sm:w-1/2 md:w-1/4 w-full sm:pr-3 pb-2 md:pb-0">
          <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
        </div>
        <div class="sm:w-1/2 md:w-1/4 w-full sm:pr-3 pb-2 md:pb-0">
          <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
        </div>
        <div class="sm:w-1/2 md:w-1/4 w-full sm:pr-3 pb-2 md:pb-0">
          <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
        </div>
        <div class="sm:w-1/2 md:w-1/4 w-full sm:pr-3">
          <ng-container *ngTemplateOutlet="shimmerCard"></ng-container>
        </div>
    </div>
    <ng-template #shimmerCard>
      <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
})
export class ShimmerComponent {
}
