import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-header',
  templateUrl: './setting-header.component.html',
  styleUrls: ['./setting-header.component.css']
})
export class SettingHeaderComponent implements OnInit {

  tab: string;

  constructor() { }

  links = ['Edit User Preveliges', 'Edit Project', 'Change Password'];
  activeLink = this.links[0];

  ngOnInit() {
    this.tab = localStorage.getItem('akuserroleura');
  }

}
