import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {
 public sideTrue:Boolean=true;
  constructor() { }
  ngOnInit() {

  }
}