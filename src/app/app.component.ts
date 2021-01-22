import { Component, OnInit } from '@angular/core';
import { FetchFromURLService } from './fetch-from-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fetchFromURLService: FetchFromURLService) { }

  fetchFromURL: any;
  dataSource: any[]
  datas: any[]
  search: any = "";

  ngOnInit() {
    this.fetchFromURLService.sendGetRequest().subscribe((data: any[]) => {
      this.dataSource = data
      this.datas = data
    })
  }

  onChange(e) {
    this.datas = this.dataSource.filter(x => x.trim().toLocaleLowerCase().includes(e.target.value.trim().toLocaleLowerCase()))
  }
  
}