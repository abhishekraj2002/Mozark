import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UtilService {
  constructor() {

  }

  // --------------------- changing of route ----------------------------------------
  private routeChangeSource = new Subject<any>();
  routeChange$ = this.routeChangeSource.asObservable();
  routeChange = (event) => {
    this.routeChangeSource.next(event);
  }
  
}