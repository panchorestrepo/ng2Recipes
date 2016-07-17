import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'fjr-root',
  template:   `<header>
                  <nav>
                    <ul>
                      <li><a [routerLink]="['/']">Home</a></li>
                      <li><a [routerLink]="['/recipes']">Recipes</a></li>
                      <li><a [routerLink]="['/shopping-list']">Shopping List</a></li>
                    </ul>
                  </nav>
              </header>
                
              <div class="main">
                  <router-outlet></router-outlet>
              </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app worksp paco roco!';
}
