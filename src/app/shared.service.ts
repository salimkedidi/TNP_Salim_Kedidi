import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  alerts:any;
  closeAlert;
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  constructor() { }
    updateCartCount(count:number){
      this.currentCartCount.next(count)
    
  }
}
