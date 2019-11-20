import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-header',
  templateUrl: './finance-header.component.html',
  styleUrls: ['./finance-header.component.css']
})
export class FinanceHeaderComponent implements OnInit {
  tab: string;

  constructor() { }

  links = ['Add Income', 'Add Expenses', 'Genarate Report', 'Delete Income/Expenses'];
  activeLink = this.links[0];

  ngOnInit() {
    this.tab = localStorage.getItem('akuserroleura');
  }

}
