import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
import { DatepickerOptions } from 'ng2-datepicker';


@Component({
  selector: 'app-applicationquality',
  templateUrl: './applicationquality.component.html',
  styleUrls: ['./applicationquality.component.scss']
})
export class ApplicationqualityComponent  {

  @Output () closePopEvent = new EventEmitter()
  isSubmitted = false;

  addContact:FormGroup;
  organisationOptions=[
    {"group_id":1,"group_name":"test"},
    {"group_id":12,"group_name":"test1"},
    {"group_id":13,"group_name":"test2"},
    {"group_id":14,"group_name":"test3"},
    {"group_id":15,"group_name":"test4"}
  ];

  date: Date = new Date();
  options: DatepickerOptions = {
    locale: enLocale,
    placeholder:'Select Date'
  };
  networks: any;
  location: any;
  networktag: any;
  platform: any;
  
  constructor(public globalService: GlobalService, private formBuilder: FormBuilder, private httpService: HttpService,) {
    this.addContact = this.formBuilder.group({
      group_fk_select_name: ['', Validators.required],
      network_select_name: ['', Validators.required],
      networkSpeed_select_name:['', Validators.required],
      location_select_name: ['', Validators.required],
      deviceCategory_select_name: ['', Validators.required],
      group_fk: [''],
    });
  }
  changeSelection(event){
  
  }
  ngAfterViewInit(){
    this.networks = this.httpService.getDataFromUrl("UxDashBoard/order/networks/1");
    this.location = this.httpService.getDataFromUrl("UxDashBoard/order/cities/1");
    this.networktag = this.httpService.getDataFromUrl("UxDashBoard/order/networktag/1");
    this.platform = this.httpService.getDataFromUrl("UxDashBoard/order/platform/1");
  }
  forPopupClose(){

    this.closePopEvent.emit();
    document.body ? document.body.classList.remove('no-scroll') : '';

  }
  onSubmit(event){
    alert(event);
    this.isSubmitted = true;
    if (this.addContact.valid) {
      this.globalService.showPopUp = "";
    }else{
      return false;
    }
  }
  deleteCard(){
    
  }
  

}
