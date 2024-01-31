import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private isMobile = new BehaviorSubject<boolean>(false);
  private toggle = new BehaviorSubject<boolean>(false);

  constructor() { 
    this.checkWidth();
  }

  checkWidth () {
    const isMobile = window.innerWidth < 992; //Mobile View
    this.isMobile.next(isMobile);
  }

  onResize() {
    this.checkWidth();
  }

  // The two methods below returns observable (asObservable()) of the isMobile  and toggle variables, allowing components to subscribe to changes in the mobile view state.
  getIsMobile() {
    return this.isMobile.asObservable();
  }

  getToggle () {
    return this.toggle.asObservable();
  }

  // This method toggles the value of the toggle variable by emitting the opposite boolean value (!this.toggle.value). It updates the state of the menu toggle.
  toggleMenu () {
    this.toggle.next(!this.toggle.value)
  }

}
