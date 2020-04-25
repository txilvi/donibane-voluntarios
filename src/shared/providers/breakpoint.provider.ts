import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


declare const window: any;

@Injectable()
export class BreakpointProvider {

  private isXSObs: Subject<boolean> = new BehaviorSubject(this.isXS());
  private isTabletObs: Subject<boolean> = new BehaviorSubject(this.isTablet());
  breakpoint: string;
  isXS$ = this.isXSObs.asObservable();
  isTablet$ = this.isTabletObs.asObservable();

  constructor() {
    this.setBreakpoint();

    window.onresize = function() {
      this.setBreakpoint();
    }.bind(this);
  }


  private setBreakpoint() {
    let newBreakpoint = this.getBreakpoint();
    if (newBreakpoint == 'xs' && this.breakpoint != 'xs') {
      this.isXSObs.next(true);
    } else if (newBreakpoint != 'xs' && this.breakpoint == 'xs') {
      this.isXSObs.next(false);
      if (newBreakpoint == 'sm') {
        this.isTabletObs.next(true);
      }
    } 
    this.breakpoint = newBreakpoint;
  }

  private getBreakpoint(): string{
    const windowWidth = window.innerWidth;
    let breakpoint: string;
    if (windowWidth < 768) {
      breakpoint = 'xs';
    }
    else if (windowWidth < 992) {
      breakpoint = 'sm';
    }
    else if (windowWidth < 1200) {
      breakpoint = 'md';
    }
    else {
      breakpoint = 'lg';
    }
    return breakpoint;
  }

  private isXS(): boolean {
    let breakpoint = this.getBreakpoint();
    if (breakpoint == 'xs') {
      return true;
    }
    return false;
  }

  private isTablet(): boolean {
    let breakpoint = this.getBreakpoint();
    if (breakpoint == 'sm') {
      return true;
    }
    return false;
  }
}
