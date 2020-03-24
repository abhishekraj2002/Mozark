import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent  {
  public networktag: Array<any>;
  public location: Array<any>;
  public networks: Array<any>;
  public platform: Array<any>;
  public os_version: Array<any>;
  public app_version: Array<any>;
  public isSubmitted = false;
  public getData: any;
  public addContact: FormGroup;
  public organisationOptions = this.globalService.organisationOptions;
  public date:Date = new Date();
  public options: DatepickerOptions = {
    locale: enLocale,
    placeholder:'Select Date'
  };
   
  @Output() valueChange = new EventEmitter();


  constructor(public globalService: GlobalService, private formBuilder: FormBuilder, private httpService: HttpService) {
    this.addContact = this.formBuilder.group({
      networkSpeed_select_name: ['', Validators.required],
      timeWindow_select_name: ['', Validators.required],
      appVersion_select_name: ['', Validators.required],
      condition_select_name: ['', Validators.required],
      location_select_name: ['', Validators.required],
      deviceCategory_select_name: ['', Validators.required],
      network_select_name: ['', Validators.required],
      
    });
  }
  ngOnInit() {
    this.networktag = this.httpService.getDataFromUrl("UxDashBoard/order/networktag/1");
    this.location = this.httpService.getDataFromUrl("UxDashBoard/order/cities/1");
    this.networks = this.httpService.getDataFromUrl("UxDashBoard/order/networks/1");
    this.platform = this.httpService.getDataFromUrl("UxDashBoard/order/platform/1");
    this.os_version = this.httpService.getDataFromUrl("UxDashBoard/order/os/1");
    this.app_version = this.httpService.getDataFromUrl('UxDashBoard/order/appversion/1');
  }


  //to close the popup
  forPopupClose(){
    this.globalService.showPopUp = "";
    document.body ? document.body.classList.remove('no-scroll') : '';

  }

  onSubmit(event) {
    this.isSubmitted = true;
    if (this.addContact.valid) {
      this.getData = this.httpService.getDataFromUrl('UxDashBoard/monitor/addcard/1');
      this.valueChange.emit(this.getData);
      this.globalService.showPopUp = "";
    } else {
      return false;
    }
  }
}
