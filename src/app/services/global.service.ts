import { Injectable, Inject, PLATFORM_ID, HostListener, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';
// import { apiURLConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  public isBrowser: boolean = false;   // check browser
  public isMobile: boolean = false;   // check the device is mobile
  public customMobileWidth: boolean = false;
  public showSideBarComponent: boolean = false;  //show/hide sidebar component
  public isDesktopMode: boolean = false;  // desktop
  public countryList: Array<any> = [];  // country list
  public access_token: string = "test"; // access token after login
  public showPopUp: string = "";
  private subject = new Subject();
  public isPopUpActive: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('event.target.innerWidth');
  }
  addToCard(card: any) {
    this.subject.next(card);
  }
  getCart(): Observable<any> {
    return this.subject.asObservable();
  }

  public id = 'Select';
  public tabArray = ["contact-information", "address-information", "general-information", "other-information"];
  public organisationOptions: any = [
    { "group_id": 1, "group_name": "test" },
    { "group_id": 12, "group_name": "test1" },
    { "group_id": 13, "group_name": "test2" },
    { "group_id": 14, "group_name": "test3" },
    { "group_id": 15, "group_name": "test4" },
  ];
  public condition: any = [
    { "condition_id": 1, "condition_name": "Application Quality Index" },
    { "condition_id": 12, "condition_name": "Functional Score" },
    { "condition_id": 13, "condition_name": "Audio Score" },
    { "condition_id": 14, "condition_name": "Video Streaming Score" },
    { "condition_id": 15, "condition_name": "Responsive Score" },
  ];
  public Network: any = [
    { "Network_id": 1, "Network_name": "Vodafone" },
    { "Network_id": 12, "Network_name": "Idea" },
    { "Network_id": 13, "Network_name": "Airtel" },
    { "Network_id": 14, "Network_name": "Jio" },
    { "Network_id": 15, "Network_name": "Wi-fi" },
  ];
  public location: any = [
    { "location_id": 1, "location_name": "New Delhi" },
    { "location_id": 12, "location_name": "Banglore" },
    { "location_id": 13, "location_name": "Pune" },
    { "location_id": 14, "location_name": "Kolkata" },
    { "location_id": 15, "location_name": "Chennai" },
  ];
  public networkSpeed: any = [
    { "networkSpeed_id": 1, "networkSpeed": "0-1" },
    { "networkSpeed_id": 2, "networkSpeed": "1-2" },
    { "networkSpeed_id": 3, "networkSpeed": "2-3" },
    { "networkSpeed_id": 4, "networkSpeed": "3-4" },
    { "networkSpeed_id": 5, "networkSpeed": "4-8" },
    { "networkSpeed_id": 6, "networkSpeed": "8+" }
  ];
  public timeWindow: any = [
    { "timeWindow_id": 1, "timeWindowName": "7AM-11AM" },
    { "timeWindow_id": 2, "timeWindowName": "11AM-3PM" },
    { "timeWindow_id": 3, "timeWindowName": "3PM-7PM" },
    { "timeWindow_id": 4, "timeWindowName": "7PM-11PM" },
    { "timeWindow_id": 5, "timeWindowName": "11PM-7AM" }
  ];
  public appVersion: any = [
    { "appVersion_id": 1, "appVersion": "V1" },
    { "appVersion_id": 2, "appVersion": "V2" },
    { "appVersion_id": 3, "appVersion": "V3" },
    { "appVersion_id": 4, "appVersion": "V4" },
    { "appVersion_id": 5, "appVersion": "V5" }
  ];
  public deviceCategory: any = [
    { "deviceCategory_id": 1, "deviceCategory": "android high end" },
    { "deviceCategory_id": 2, "deviceCategory": "android low end" },
    { "deviceCategory_id": 3, "deviceCategory": "Apple high end" },
    { "deviceCategory_id": 4, "deviceCategory": "Apple standard" }
  ];

  public chooseKPI: any = [
    { "condition_id": 1, "condition_name": "Application Quality Index" },
    { "condition_id": 12, "condition_name": "Functional Score" },
    { "condition_id": 13, "condition_name": "Audio Score" },
    { "condition_id": 14, "condition_name": "Video Streaming Score" },
    { "condition_id": 15, "condition_name": "Responsive Score" },
  ];

  public peers: any = [
    { "Network_id": 1, "Network_name": "Vodafone" },
    { "Network_id": 12, "Network_name": "Idea" },
    { "Network_id": 13, "Network_name": "Airtel" },
    { "Network_id": 14, "Network_name": "Jio" },
    { "Network_id": 15, "Network_name": "Wi-fi" },
  ];

  public deviceOs: any = [
    { "deviceOs_id": 1, "deviceOs": "android" },
    { "deviceOs_id": 2, "deviceOs": "ios" }

  ];

  // public responseData:Array<any> = [
  //   {
  //     "id": 1,
  //     "card_name":"Application Quality Index",
  //     "score":"2.8",
  //     "name":"Vodafone",
  //     "speed":'7-8 mbps',
  //     "date":"01 - 21 Sept 2020"
  //   },
  //   {
  //     "id": 2,
  //     "card_name":"Functional Score",
  //     "score":"44",
  //     "name":"Airtel",
  //     "speed":'2-6 mbps',
  //     "date":"01 - 21 Sept 2020"
  //   }
  // ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone, private httpService: HttpService) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
      this.detectDevice(null);
      window.onresize = (e) => {
        //ngZone.run will help to run change detection
        this.ngZone.run(() => {
          this.detectDevice(window.innerWidth);
        });
      }
    };
    // this.fetchCountryList();
  }


  private fetchCountryList(): void {
    console.log('inside fetch country list');
    // this.httpService.createPostRequest(apiURLConfig.fetchDivisionList,{}).subscribe((list: any) => {
    //     if(list && list['success']==true){
    //     this.countryList=list['data'];
    //     }
    // }, err => { console.log(err) });
  }

  private detectDevice(width: number): void {
    let windowWidth = width || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth <= 767)
      this.isMobile = true;
    else {
      var body = document.getElementsByTagName('body')[0];
      this.isMobile = false;
      if (body && body.classList.contains('sidebar-active'))
        body && body.classList.remove('sidebar-active');
    }


    if (windowWidth <= 991)
      this.customMobileWidth = true;
    else
      this.customMobileWidth = false;

    //show or hide side bar toggle button based on screen size
    if (windowWidth <= 1199)
      this.showSideBarComponent = true;
    else
      this.showSideBarComponent = false;

    //show or hide side bar toggle button based on screen size
    if (windowWidth <= 1599)
      this.isDesktopMode = true;
    else
      this.isDesktopMode = false;

  }

  public _createArray(_elements) {
    let _blankArr = [];
    return _blankArr.slice.call(_elements);
  }

  public _resetClass(findByClass, classRemove) {
    let _arr = this._createArray(document.getElementsByClassName(findByClass)); //finds a list of elements
    for (let index = 0; index < _arr.length; index++) {
      const element = _arr[index];
      element.classList.remove(classRemove); //remove class
    }
  }

  public setSessionStorage(key: string, value: string): void {   // set session storage
    if (this.isBrowser) {
      window.sessionStorage.setItem(key, value);
    }
  }

  public clearSessionStorage(): void {   // clear session storage
    if (this.isBrowser) {
      window.sessionStorage.clear();
    }
  }

  public getSessionStorage(key: string): string {   // get session storage
    if (this.isBrowser) {
      return window.sessionStorage.getItem(key);
    }
  }

  public scroll(element: HTMLElement): void { // scrolls to the respective section
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  public makeElementActive(id: string): void {
    if (this.isBrowser) {
      let tabElement = document.getElementById(id); //find tab to be active

      if (tabElement)
        tabElement.classList.add('active'); // makes clicked tab active
    }
  }
}