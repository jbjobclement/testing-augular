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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const selectedFromService = this.selectService.getSelected();
    this.selectedFromService = selectedFromService;
    this.selected = this.route.snapshot.params['selected']
  }
}