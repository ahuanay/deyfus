import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.css']
})
export class ListColorComponent implements OnInit {
  
  public listColores: any;
  public filterColor: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listColores = [];
    this.filterColor = '';
    this.listColoresQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:color').subscribe((data) => {
      if(data) {
        this.listColoresQuery();
      }
    });
  }

  listColoresQuery() {
    this.webService.getAllColores().subscribe(
      response => {
        this.listColores = response;
        this.spinnerService.hide();
      },
      error => {
        console.log(error);
      }
    )
  }

  reload() {
    this.inicializator();
  }
}
