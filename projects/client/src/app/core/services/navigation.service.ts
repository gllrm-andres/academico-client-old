import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private currentRoute = new BehaviorSubject<string>('Dashboard');
  currentRoute$ = this.currentRoute.pipe();

  constructor() {}

  push(route: NavRoute) {
    this.currentRoute.next(route.title);
  }
}

export interface NavRoute {
  title: string;
  route: string;
}
