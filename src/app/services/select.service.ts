import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class SelectService {
  selected: string = "component";
  selectedSubject: Subject<string> = new Subject<string>();
  selected$ = this.selectedSubject.asObservable();

  constructor() {
    this.selected$.subscribe(selected => {
      this.selected = selected;
    })
  }

  setSelected(selected: string): void {
    this.selected = selected
    this.selectedSubject.next(selected);
  }
  
  getSelected(): string {
    return this.selected;
  }
}