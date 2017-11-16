import { Constants } from './../../../constants';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private cookieService: CookieService, private route: Router, private http: Http) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.cookieService.put("account", "someone");
    this.submitted = true;
    this.route.navigate(['/pages/dashboard']);
    if (this.form.valid) {
      this.http.post(Constants.API_ENDPOINT + '/login',
        {
          username: this.email.value,
          password: this.password.value
        });
    }
  }
}
