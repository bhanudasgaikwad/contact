import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})

export class PageTitleComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() pageData: any = {
    pageTitle: '',
    btnString: '',
    pageUrl: ''
  };

  ngOnInit(): void {
  }

  addNew() {
    this.router.navigate(['this.pageData.pageUrl']);
  }

}
