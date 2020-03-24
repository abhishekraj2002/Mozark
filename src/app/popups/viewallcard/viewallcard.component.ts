import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalService } from 'src/app/services/global.service';
import {IMyDrpOptions} from 'mydaterangepicker';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-viewallcard',
  templateUrl: './viewallcard.component.html',
  styleUrls: ['./viewallcard.component.scss']
})
export class ViewallcardComponent implements OnInit {

  public totalRecord : Array<any> = [];


  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
// to set initial date range value using the selDateRange attribute.
public model: any = {beginDate: {year: 2018, month: 10, day: 9},
                         endDate: {year: 2018, month: 10, day: 19}};


  constructor(private ngxService: NgxUiLoaderService, private globalService:GlobalService) {

    // this.ngxService.start();
  }
  drop(event: CdkDragDrop<string[]>) {

    // moveItemInArray(this.totalRecord, event.previousIndex, event.currentIndex);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  ngOnInit() {
      this.totalRecord = new Array(5);
  }

  afterViewInit(){
      // this.ngxService.stop();
  }

  forPopupClose(){
    this.globalService.showPopUp = "";
    document.body ? document.body.classList.remove('no-scroll') : '';
  }
  
}
