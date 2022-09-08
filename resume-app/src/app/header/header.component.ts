import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name = '';
  @Input() title = '';
  @Input() email = '';
  @Input() githubUrl = '';
  @Input()  linkedinURL = '';
  
  constructor() { }
  ngOnInit(): void {
  }

}
