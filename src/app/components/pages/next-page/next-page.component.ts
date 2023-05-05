import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SelectService } from 'src/app/services/select.service';
@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent {
  @Output() selectedChanged = new EventEmitter<string>()
  selected: string  = "component";
  selected$!: Observable<string>;
  constructor(
    private router: Router,
    private selectService: SelectService
  ) {}
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

  goToTerminal(selected: string): void {
    this.selectService.setSelected(selected);
    this.router.navigate(['/terminal', selected]);
  }
}
