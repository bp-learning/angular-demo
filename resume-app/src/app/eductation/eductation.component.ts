import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eductation',
  templateUrl: './eductation.component.html',
  styleUrls: ['./eductation.component.css']
})
export class EductationComponent implements OnInit {
  @Input() education: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
