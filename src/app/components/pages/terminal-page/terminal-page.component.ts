import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SelectService } from 'src/app/services/select.service';
@Component({
  selector: 'app-terminal-page',
  templateUrl: './terminal-page.component.html',
  styleUrls: ['./terminal-page.component.scss']
})
export class TerminalPageComponent {
  selected: string | undefined;
  constructor(
    private selectService: SelectService
  ) {}

  ngOnInit() {
    this.selected = this.selectService.getSelected()
  }
}