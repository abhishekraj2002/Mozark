import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service'
import { configs } from '../app.config';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public submitted: boolean = false;
  public errorMessage: string = "";
  constructor(public httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private globalService: GlobalService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true; //allowing form submission

    let url = configs['url']['signIn'];
    let data = { "email": "test@mozark.ai", "password": "Test@123" };

    //calling login api to get user access token
    this.httpService.createPostRequest(url, data).subscribe((response: any) => {
      if (response['status'] == true) {
        if (this.globalService.isBrowser) {
          console.log('testing');
          localStorage.setItem('isLoggedIn', "true");
        }
        this.router.navigate(["/monitoring"]);

      } else {
        this.errorMessage = "Please enter correct username and password";
      }
    })
  }

}
