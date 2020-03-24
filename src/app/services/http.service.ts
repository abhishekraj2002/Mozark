import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { throwError, of, Observable } from "rxjs";
import { Injectable } from '@angular/core';

const siteUrl: any = '';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

const hasAuthorizationCodehttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'PHP-AUTH-USER': 'c4fd9ea6d91e1588561c69d5c093d558',
        'PHP-AUTH-PW': '9eb417647a134488ba81e457e8004cc0',
    })
};

const fileHttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
    })
};
const allUrl: any = [
    "UxDashBoard/user/signin",
    "UxDashBoard/order/list",
    "UxDashBoard/order/app/1",
    "UxDashBoard/order/cities/1",
    "UxDashBoard/order/networks/1",
    "UxDashBoard/order/networktag/1",
    "UxDashBoard/order/appversion/1",
    "UxDashBoard/order/testids/1",
    "UxDashBoard/order/testids/1?location=Bengaluru&location=Gurugram",
    "UxDashBoard/order/platform/1",
    "UxDashBoard/order/os/1",
    "UxDashBoard/monitor/getcard/1",
    "UxDashBoard/monitor/addcard/1"
];
@Injectable({
    providedIn: "root"
})

export class HttpService {
    private accessToken: string = 'kjasfd';
    siteUrl: string;
    constructor(private http: HttpClient) {
    }

    getDataFromUrl(Url: string) {
        switch (Url) {
            case allUrl[0]:
                return this.toObject({
                    "userId": 1,
                    "email": "test@mozark.ai",
                    "firstName": "Test",
                    "lastName": "Mozark",
                    "mobile": "91.9111111111",
                    "organizationAdmin": true,
                    "organizationId": 1,
                    "domain": "MOZARK.AI",
                    "emailValidated": true,
                    "createdTime": "2020-01-14 10:20:34.0"
                });
            case allUrl[1]:
                return this.toObject({
                    "count": 1,
                    "list": [
                        {
                            "id": 1,
                            "customerName": "NEWSAPPS",
                            "orderName": "NEWSAPPS_1",
                            "mainApp": "IndiaToday"
                        }
                    ]
                })
            case allUrl[2]:
                return this.toObject({
                    "list": [
                        "TimesNow",
                        "Ndtv",
                        "IndiaToday"
                    ]
                })
            case allUrl[3]:
                return this.toObject({
                    "list": [
                        "Bengaluru",
                        "NA",
                        "Gurugram",
                        "New Delhi",
                        "Noida",
                        "Mumbai",
                        "Chennai",
                        "Kolkata",
                        "Barrackpore",
                        "Faridabad",
                        "Baranagar",
                        "South Dumdum",
                        "EM Bypass",
                        "Navi Mumbai",
                        "Sikanderpur Ghosi",
                        "Ahmedabad"
                    ]
                });
            case allUrl[4]:
                return this.toObject({
                    "list": [
                        "WIFI",
                        "Vodafone IN",
                        "Jio 4G",
                        "airtel"
                    ]
                })
            case allUrl[5]:
                return this.toObject({
                    "list": [
                        "1 - 2 MBPS",
                        "2 - 3 MBPS",
                        "5 - 6 MBPS"
                    ]
                })
            case allUrl[6]:
                return this.toObject({
                    "list": [
                        "1.0"
                    ]
                })
            case allUrl[7]:
                return this.toObject({
                    "list": [
                        "3555280968009911579586549575",
                        "3555280968009911579587060302",
                        "3555280968009911579588632788",
                        "3555280968009911579589070180",
                        "3555280968009911579589659320",
                        "3555280968009911579590249305",
                        "3555280968009911579590686202",
                        "3555280968009911579591250373",
                        "3596151004158861579594089856",
                        "3555280968009911579594577683"
                    ]
                })
            case allUrl[8]:
                return this.toObject({
                    "list": [
                        "Android"
                    ]
                })
            case allUrl[9]:
                return this.toObject({
                    "list": [
                        "8.0.0",
                        "9"
                    ]
                })
            case allUrl[11]:
                return {
                    "list": [
                                {
                                    "_id": 1,
                                    "name": "Aqi",
                                    "orderId":1,
                                    "telco":"WIFI",
                                    "mainApp":"IndiaToday",
                                    "value":[ 
                                        {
                                            "ResponsiveScore": 2.1455026455026456,
                                            "AppLoadTime": null,
                                            "TimeToLoadHomePage": 2.1443680592279217,
                                            "SearchResultTime": null,
                                            "StreamingScore": 3.23590692755156,
                                            "BufferPercentage": 3.602855631940772,
                                            "BufferCount": 3.7382337387625597,
                                            "PlayStartTime": 2.2443151771549443,
                                            "VideoSubjectiveScore": null,
                                            "PercentHD": null,
                                            "AudioSubjectiveScore": null,
                                            "FunctionalScore": null,
                                            "Aqi": 2.6909571655208886
                                        }],
                                   "disabled":"true"
                                   },               
                                   {
                                     "_id": 2,
                                    "name": "ResponsiveScore",
                                    "orderId":1,
                                    "telco":"WIFI",
                                    "mainApp":"IndiaToday",
                                    "value":[
                                        {
                                           "ResponsiveScore": 2.1455026455026456,
                                            "AppLoadTime": null,
                                            "TimeToLoadHomePage": 2.1443680592279217,
                                            "SearchResultTime": null,
                                            "StreamingScore": 4.23590692755156,
                                            "BufferPercentage": 3.602855631940772,
                                            "BufferCount": 3.7382337387625597,
                                            "PlayStartTime": 2.2443151771549443,
                                            "VideoSubjectiveScore": null,
                                            "PercentHD": null,
                                            "AudioSubjectiveScore": null,
                                            "FunctionalScore": null,
                                            "Aqi": 2.6909571655208886                    }
                                        ],
                                   "disabled":"true"
                                   }
                              ]
                    }  
                case allUrl[12]:
                    return {
                        "_id": 3,
                        "name": "Aqi",
                        "orderId":1,
                        "telco":"WIFI",
                        "mainApp":"IndiaToday",
                        "startDate":"",
                        "enddate":"",
                        "speed":"2 - 5 mbps",
                        "value":[ 
                            {
                                "ResponsiveScore": 2.1455026455026456,
                                "App Load Time": null,
                                "Time To Load Home Page": 2.1443680592279217,
                                "Search Result Time": null,
                                "StreamingScore": 1.23590692755156,
                                "Buffer Percentage": 3.602855631940772,
                                "Buffer Count": 3.7382337387625597,
                                "Play Start Time": 2.2443151771549443,
                                "VideoSubjectiveScore": null,
                                "Percent HD": null,
                                "AudioSubjectiveScore": null,
                                "FunctionalScore": null,
                                "Aqi": 2.6909571655208886
                            }],
                       "disabled":"true"
          }           
        
        }
    }
    toObject(arr) {
        let keyInd: any = Object.keys(arr).toString();
        const array = [].concat.apply([], arr.list.map((key, index) => ({ [keyInd]: key, id: index })));
        return array;
    }

    createGetRequest(url: string) {
        let getUrl = url + "?access_token=" + this.accessToken;
        return this.http.get<any>(url)
            .pipe(
                catchError(this.handleError));
    }

    createPostRequest(url: any, data: any) {
        let options;
        options = httpOptions;
        return this.http.post<any>(url, data, options)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof HttpErrorResponse) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }
}