import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-editwidget',
  templateUrl: './editwidget.component.html',
  styleUrls: ['./editwidget.component.scss']
})
export class EditwidgetComponent implements OnInit {

  ngOnInit() {
  }
  addContact:FormGroup;
  organisationOptions=[
    {"group_id":1,"group_name":"test"},
    {"group_id":12,"group_name":"test1"},
    {"group_id":13,"group_name":"test2"},
    {"group_id":14,"group_name":"test3"},
    {"group_id":15,"group_name":"test4"},
  ];
  constructor(private globalService: GlobalService, private formBuilder: FormBuilder, private httpService: HttpService,) {
    this.addContact = this.formBuilder.group({
      group_fk_select_name: ['', Validators.required],
      group_fk: [''],
    });
  }
  changeSelection(event){
  
  }
  triggerOutput(){}
  
}
