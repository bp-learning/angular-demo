import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resume: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://gist.githubusercontent.com/bhupendraparihar/97000ac3a96249124753ab934b4d3e0f/raw/690efce5439ea5f7f3d34be281ce2103107fa7c8/resume.json')
      .subscribe(res => {
        this.resume = res;
        console.log(res)
      });
  }
  


  
}
