import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-management-header',
  templateUrl: './project-management-header.component.html',
  styleUrls: ['./project-management-header.component.css']
})
export class ProjectManagementHeaderComponent implements OnInit {

  constructor() { }

  links = ['Create Project', 'Enroll Project'];
  activeLink = this.links[0];

  ngOnInit() {
  }

}
