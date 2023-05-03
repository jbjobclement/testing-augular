import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class SelectService {
  selected: string = "component";
  constructor() { }

  setSelected(selected: string): void {
    this.selected = selected
  }
  getSelected(): string {
    return this.selected;
  }
}