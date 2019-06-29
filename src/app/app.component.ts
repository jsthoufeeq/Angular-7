import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thoufeeq';
  cart: Observable<Array<any>>;

  constructor(private store: Store<any>){}

  ngOnInit() {
    this.cart = this.store.select('cart');
  }
}
