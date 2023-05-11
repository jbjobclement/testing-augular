import { Component } from '@angular/core';
import { Observable, Subscription, from, fromEvent } from 'rxjs';
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
    // https://rxjs.dev/guide/overview
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
      // console.log(`clicked ${count} times.`)
    })

  }
  
  docObservableEX1() {
    // https://rxjs.dev/guide/observable
    // 該範例可顯示出Observable的同步與非同步操作。
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      try {
        throw new Error()
      } catch (e){
        subscriber.error("testing error")
      }
      
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    
    console.log('just before subscribe');

    const subscription = observable.subscribe({
      next(x: number) {
        console.log('got value f' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
    
    subscription.unsubscribe();
  }

  docObservableEX2() {
    const foo = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
    });
     
    foo.subscribe((x) => {
      console.log(x);
    });

    foo.subscribe((y) => {
      console.log(y);
    });
  }

  docObservableEX3() {
    const observable = from([10, 20, 30]);
    const subscription = observable.subscribe((x) => console.log(x));
    // Later:
    subscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}