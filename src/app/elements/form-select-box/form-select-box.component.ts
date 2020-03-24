import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-form-select-box',
  templateUrl: './form-select-box.component.html',
  styleUrls: ['./form-select-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class FormSelectBoxComponent implements OnInit {
  @Input() options: any;
  @Input() currentSelectedValue: any;
  @Input('dropdownLabel') dropdownLabel: any;
  @Input() id: any;
  @Input() controlName: any;
  @Input('dropDownIdKey') dropDownIdKey: any;
  @Input() formElementName: FormGroup;
  @Input() addCurrentSelectedValue: any;
  @Input() selected: any;
  @Output() currentSelectionChange = new EventEmitter<object>();
  public newOption: string;
  public emptyDataSelection: string = 'Select';
  public _id: string = 'Select';
  public _controlName: any;
  public _selected: any;
  public _currentSelection: string = '';
  public showDropDown: boolean = false;
  public previousOptions: Array<any> = [];
  public selectOptions: Array<any> = [];

  constructor(private globalService: GlobalService, private formBuilder: FormBuilder) {
    this.newOption = '';
    var self = this;
    this.detectOutsideClicks(self);
  }

  //find parent by class name
  findParentByClass(node, cls) {
    while (node && !this.hasClass(node, cls)) {
      node = node.parentNode;
    }
    return node;
  }

  //check it has class
  hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return (str.indexOf(testCls) !== -1);
  }

  // close select options in outside click on window
  private detectOutsideClicks(self: this) {
    var self = this;
    if (this.globalService.isBrowser) {
      document.body.addEventListener('click', function (event: any) {
        if (!event.path.some(el => el['id'] == "select-div")) {
          if (!(event.target.matches('#calendar-input') || self.findParentByClass(event.target, "select-input-wrapper"))) {
            if (self.showDropDown === true)
              self.showDropDown = false;
          }
        }
      });
    }
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.controlName && this.controlName != this._controlName)
      this._controlName = this.controlName;

    if (this.id != this._id)
      this._id = this.id;
    //  this.enableDisable();
    if (this.options != this.previousOptions) {
      this.selectOptions = [];
      // if(this.currentSelectedValue)
      // this._currentSelection = this.currentSelectedValue;

      this.previousOptions = this.options;
      if (this.options && this.options.length > 0) {
        this.options.forEach(element => {
          if (this.addCurrentSelectedValue)
            this.selectOptions.push({ name: this._currentSelection.split(' ')[0] + ' ' + element[this.dropdownLabel], id: element[this.dropDownIdKey], flag: element['flag'], group_type_id: element['group_type_id'], group_type_name: element['group_type_name'] });
          else
            this.selectOptions.push({ name: element[this.dropdownLabel], id: element[this.dropDownIdKey], flag: element['flag'], group_type_id: element['group_type_id'], group_type_name: element['group_type_name'] });
          this.enableDisable();

        });
      }
      if (this.selected && this.selected != this._selected) {
        this._selected = this.selected;
        if (this.selectOptions && this.selectOptions.length > 0) {
          for (let index = 0; index < this.selectOptions.length; index++) {
            const element = this.selectOptions[index];
            if (this._selected == element['id']) {
              this._currentSelection = element['name'];

            }
          }
        }
      }
    }
  }

  enableDisable() {
    // if(this.selectOptions.length==0){
    //   document.getElementById(this._id)?document.getElementById(this._id).classList.add("partial-disable"):"";
    // }else{
    //   document.getElementById(this._id)?document.getElementById(this._id).classList.remove("disabled"):"";
    // }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._currentSelection = this.currentSelectedValue;
      this.enableDisable();
    }, 0);
  }

  public triggerDropDown(): void {
    this.showDropDown = true;
  }

  get currentSelection(): any {
    return this._currentSelection;
  }

  //set the selected option
  public setCurrentSelection(option): void {
    this.showDropDown = false;
    this._currentSelection = option['name'];
    option['fieldName'] = this._controlName ? this._controlName.substr(0, (this._controlName.length - 12)) : ''
    this.currentSelectionChange.emit(option);
  }
}
