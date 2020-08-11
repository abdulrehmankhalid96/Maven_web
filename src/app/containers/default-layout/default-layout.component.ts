import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
constructor(public router:Router){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
