import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoring-header',
  templateUrl: './mentoring-header.component.html',
  styleUrls: ['./mentoring-header.component.css']
})
export class MentoringHeaderComponent implements OnInit {

  constructor() { }

  links = ['Find New Mentor', 'Chats', 'Requested Student', 'My Mentors', 'My Students'];
  activeLink = this.links[0];
  tab = '';
  ngOnInit() {
    this.tab = localStorage.getItem('akuserroleura');
    //console.log(this.tab);
  }

}
 