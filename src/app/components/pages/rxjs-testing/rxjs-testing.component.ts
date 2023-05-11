import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, from, fromEvent, interval, of } from 'rxjs';
import { concatAll, first, map, mergeAll, scan, take, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-testing',
  templateUrl: './rxjs-testing.component.html',
  styleUrls: ['./rxjs-testing.component.scss']
})

export class RxjsTestingComponent {
  subscription!: Subscription;
  x: number  = 0;

  constructor(
    private http: HttpClient
  ){}

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

  docObserverEX1() {

    const observer = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.error('e');
      subscriber.complete();
    });    
    const subscription = observable.subscribe(observer);
    // const subscription = observable.subscribe(x => console.log('Observer got a next value: ' + x));
    subscription.unsubscribe();
  }

  docOperatorEX1() {
    of(1, 2, 3)
    .pipe(map(n => n*n))
    .subscribe(n => {
      console.log(n)
    })
  }

  docOperatorEX2() {
    of(1, 2, 3)
    .pipe(first())
    .subscribe(n => {
      console.log(n)
    })
  }

  docOperatorEX3() {
    // https://rxjs.dev/api/index/function/interval
    // https://rxjs.dev/api/index/function/take
    // creation operator
    const observable = interval(200)
    const takeFourNumbers = observable.pipe(take(6))
    const subscription = takeFourNumbers.subscribe(x => console.log('Next: ' + x));
    // subscription.unsubscribe()
  }

  docOperatorEX4() {
    const uesrUrl = 'https://jsonplaceholder.typicode.com/posts'
    // Higher-order Observables
    // const fileObservable = urlObservable.pipe(map((url) => http.get(url)));
    const userObservable = of(uesrUrl, uesrUrl).pipe(
      map((url) => this.http.get(url)),
      concatAll()
    );

    userObservable.subscribe(res => {
      console.log(res)
    })

    const noneConcatArrObservable = of([1,2], [3,4], [5,6]).pipe(
      map(arr => of(arr)),
    );

    noneConcatArrObservable.subscribe(res => {
      console.log('noneConcatArrObservable', res)
    })

    const concatAllArrObservable = of([1,2], [3,4], [5,6]).pipe(
      map(arr => of(arr)),
      concatAll()
    );

    concatAllArrObservable.subscribe(res => {
      console.log('concatAllArrObservable', res)
    })

    const mergeAllArrObservable = of([1,2], [3,4], [5,6]).pipe(
      map(arr => of(arr)),
      mergeAll()
    );

    mergeAllArrObservable.subscribe(res => {
      console.log('mergeAllArrObservable', res)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}