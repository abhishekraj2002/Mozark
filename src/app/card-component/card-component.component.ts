import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { configs } from '../app.config';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent  {
  @Input() index: number;
  @Input() listData: any;
  
  public cardType:Object=configs['cardType'];
  currentPopUp : number;
 
  constructor(private globalService:GlobalService) {
    
   }

  forPopupOpen(index) {
    this.currentPopUp = index;
    document.body ? document.body.classList.add('no-scroll') : '';
  }

  closePopUp(){
    this.currentPopUp = null;
  }

}
