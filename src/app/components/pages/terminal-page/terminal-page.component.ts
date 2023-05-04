import { Component, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SelectService } from 'src/app/services/select.service';
@Component({
  selector: 'app-terminal-page',
  templateUrl: './terminal-page.component.html',
  styleUrls: ['./terminal-page.component.scss']
})
export class TerminalPageComponent {
  selected!: string;
  selectedFromService!: string;
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const selectedFromUri = this.route.snapshot.params['selected']
    const selectedFromService = this.selectService.getSelected();
    if (selectedFromUri) {
      this.selected = selectedFromUri
      this.selectedFromService = selectedFromService;
    } else {
      this.router.navigate(['/terminal', selectedFromService]);
    }
  }
}