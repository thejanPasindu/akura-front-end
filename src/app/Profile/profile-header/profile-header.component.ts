import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor() { }

  links = ['Profile', 'Reset Password'];
  activeLink = this.links[0];

  ngOnInit() {
  }

}
