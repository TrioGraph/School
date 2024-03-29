import { Component, Input, OnInit } from '@angular/core';
import { NavData } from '../side-nav/nav-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  public navItems = NavData;
  collapseSidePanel: boolean = true;
  // faBars = faBars;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  ngOnInit(): void {
  }
  
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  toggleSidePanel() {
    this.collapseSidePanel = !this.collapseSidePanel;
  }

}
