import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SideNavItemData } from './side-nav-item-data';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'my-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit, OnDestroy {

  @Input() data: SideNavItemData;

  private navigationSubscription: Subscription;
  isOpen: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
    let isOpen: boolean = false;
    this.navigationSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.data.sections.forEach((elemnt) => {
          if (event.urlAfterRedirects.endsWith(elemnt.link)) {
            isOpen = true;
          }
          this.isOpen = isOpen;
        })
      });
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
