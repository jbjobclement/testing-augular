import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  date: Date = new Date();
  asyncPromiseData!: Promise<string>;

  ngOnInit(): void {
    this.asyncPromiseData = new Promise(res => {
      setTimeout(() => {
        res("promise")
      }, 2000)
    })
  }
}