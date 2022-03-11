import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  obs$ = new Observable((observer)=>{
    setTimeout(() => {
        observer.next("First Package")
    }, 1000);
    setTimeout(() => {
        observer.next("Second Package")
    }, 2000);
    setTimeout(() => {
        observer.next("Third Package")
        // observer.error(new Error("Something went wrong"))
    }, 5000);
    setTimeout(() => {
        // observer.next("Fourth Package")
        observer.complete()
    }, 7000);
  })

  unSub$! : Subscription;

  onSubscribe(){
    this.unSub$ = this.obs$
      .pipe(
        map(val => "My " + val),
        tap(val => console.log("TAPPING - ", val)))
      .subscribe(response => console.log("RESPONSE : ", response))
    // this.obs$.subscribe({
    //   next : data => console.log("next : ", data),
    //   error : err => console.log("Error : ", err),
    //   complete : () => console.log("COMPLETED")
    // })
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
