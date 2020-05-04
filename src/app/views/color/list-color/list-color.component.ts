import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.css']
})
export class ListColorComponent implements OnInit {
  
  public listColores: any;
  public filterColor: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicilizator();
  }

  inicilizator() {
    this.listColores = [];
    this.filterColor = '';
    this.listColoresQuery();
  }

  listColoresQuery() {
    this.webService.getAllColores().subscribe(
      response => {
        this.listColores = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  reload() {
    this.inicilizator();
  }
}
