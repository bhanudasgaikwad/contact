import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { merge } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private rounter: Router,
    private activatedRoute: ActivatedRoute
  ){}

  title = 'connect';

  ngOnInit() {
    const onNavigationEnd = this.rounter.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );
    merge(onNavigationEnd)
      .pipe(
        map( () => {
          let route = this.activatedRoute;
          while(route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter( route => route.outlet === 'primary'),
        mergeMap( route => route.data)
      )
      .subscribe( event => {
        const titile = event['titile'];
      })
  }
}
