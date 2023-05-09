import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>()


  dec(): void {
    this.resize(-1)
  }
  
  inc(): void {
    this.resize(1)
  }

  resize(delta: number): void {
    this.size = this.size + delta
    this.sizeChange.emit(this.size)
  }
}