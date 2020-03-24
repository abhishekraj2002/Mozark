import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { configs } from '../app.config';
import {  GlobalService } from "../services/global.service";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent {


  title = 'Mozark';
  public isCurrentTab: any;          //for current tab
  public containers: Array<any> = [];    
  public cardData:Array<any> = new Array(0); // data of card
  public cardType:Object=configs['cardType']; // to check the popup name
  public getAllCard: any;

  @Output() getGraph = new EventEmitter();


  constructor(private ngxService: NgxUiLoaderService, public globalService:GlobalService, private httpService: HttpService) {
    //to start the loader
    this.ngxService.start();    
    this.containers.push(this.containers.length);
    this.isCurrentTab = this.containers.length - 1;
  }

  //to add new tab
  addNewPage() {
    this.containers.push(this.containers.length);
    this.isCurrentTab = this.containers.length - 1;
  }

  //to close the selected tab 
  close(i) {
    if (this.containers && this.containers.length > 1) {
      this.containers.splice(i, 1);
      this.isCurrentTab = this.containers.length - 1;
    }
  }

  //to show current tab
  showCurrenttab(i) {
    this.isCurrentTab = i;
  }
 

  ngAfterViewInit() {
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
   this.getAllCard =  this.httpService.getDataFromUrl('UxDashBoard/monitor/getcard/1');
   for(let i=0;i<this.getAllCard.list.length;i++){
   this.cardData.push(this.getAllCard.list[i]);
   }
  }

  // to open the selected popup
  forPopupOpen(key) {
    this.globalService.showPopUp = key;
    document.body ? document.body.classList.add('no-scroll') : '';

  }

  valueChangeEvent(event){
    this.cardData.push(event);
    this.globalService.addToCard(event);
  }
}
