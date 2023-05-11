import { Component } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, scan, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-testing',
  templateUrl: './rxjs-testing.component.html',
  styleUrls: ['./rxjs-testing.component.scss']
})

export class RxjsTestingComponent {
  subscription!: Subscription;
  x: number  = 0;
  ngOnInit(){
    this.subscription = fromEvent<MouseEvent>(document, 'click')
    .pipe(
      // 最小可觸發間隔
      throttleTime(1000),
      // 處理每一個事件發送的內容，此處回傳了畫面滑鼠點擊的位置X。
      map((e: MouseEvent) => e.clientX),
      // 類似reduce，設定初始值，與每一次事件發送出的內容一起處理，然後傳給下一次事件的scan。
      scan((count, clientX) => count + clientX, this.x)
    )
    .subscribe((count) => {
      this.x = count;
      console.log(`clicked ${count} times.`)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}