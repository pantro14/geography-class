import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar sticky top-0 z-50 flex justify-between bg-base-100">
      <a class="btn btn-ghost normal-case text-2xl ml-2"
        href="/home">Geography Class</a>
      <div class="order-last mr-2">
        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabindex="0" class="btn m-1">Themes</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li (click)="onThemeSelection('light')"><a>Light</a></li>
            <li (click)="onThemeSelection('dark')"><a>Dark</a></li>
            <li (click)="onThemeSelection('cupcake')"><a>Cupcake</a></li>
          </ul>
        </div>
      </div>
    </header>
  `
})
export class NavBarComponent {
  @Output() themeChanged = new EventEmitter<string>();

  onThemeSelection(theme: string) {
    this.themeChanged.emit(theme);
  }
}
