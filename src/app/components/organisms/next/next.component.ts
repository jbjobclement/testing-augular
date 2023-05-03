import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent {
  @Output() selectedChanged = new EventEmitter<string>()
  selected: string  = "component";
  options: { value: string, label: string }[] = [
    {
      value: 'component',
      label: "New Component"
    },
    {
      value: 'material',
      label: 'Angular Material'
    },
    {
      value: 'pwa',
      label: 'Add PWA Support'
    },
    {
      value: 'dependency',
      label: 'Add Dependency'
    },
    {
      value: "test",
      label: 'Run and Watch Tests'
    },
    {
      value: 'build',
      label: 'Build for Production'
    }
  ]
  
  handleChangeSelected(value: string): void {
    this.selected = value;
    this.selectedChanged.emit(value)
  }
}
