import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import {IMyDrpOptions} from 'mydaterangepicker';


@Component({
  selector: 'app-addgraph',
  templateUrl: './addgraph.component.html',
  styleUrls: ['./addgraph.component.scss']
})
export class AddgraphComponent {

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
// to set initial date range value using the selDateRange attribute.
public model: any = {beginDate: {year: 2018, month: 10, day: 9},
                         endDate: {year: 2018, month: 10, day: 19}};



  addContact:FormGroup;
  organisationOptions=[
    {"group_id":1,"group_name":"test"},
    {"group_id":12,"group_name":"test1"},
    {"group_id":13,"group_name":"test2"},
    {"group_id":14,"group_name":"test3"},
    {"group_id":15,"group_name":"test4"},
  ];
  constructor(public globalService: GlobalService, private formBuilder: FormBuilder, private httpService: HttpService,) {
    this.addContact = this.formBuilder.group({
      group_fk_select_name: ['', Validators.required],
      networkSpeed_select_name:['',Validators.required],
      timeWindow_select_name:['',Validators.required],
      appVersion_select_name:['',Validators.required],
      condition_select_name:['',Validators.required],
      location_select_name:['',Validators.required],
      deviceCategory_select_name:['',Validators.required],
      deviceCategory_select_os:['',Validators.required],
      network_select_name:['',Validators.required],
      networkSpeed_fk:[''],
      timeWindow_fk:[''],
      network_fk:[''],
      appVersion_fk:[''],
      deviceCategory_fk:[''],
      condition_fk:[''],
      location_fk:[''],
      group_fk: [''],
      peer_fk: [''],
      deviceOs_fk: [''],
    });
  }
  changeSelection(event){
  
  }
triggerOutput(){

}

forPopupClose(){
  this.globalService.showPopUp = "";
  document.body ? document.body.classList.remove('no-scroll') : '';

}
  
}
