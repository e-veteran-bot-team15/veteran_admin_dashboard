import { Component, OnInit } from '@angular/core';
import { navBarData } from './nav-side-bar-data';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  collapsed = false;
  navData = navBarData;

  ngOnInit(): void {
    this. collapsed = true;
  }

}
