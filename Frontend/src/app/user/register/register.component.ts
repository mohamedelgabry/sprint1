import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  template: `\`

  <div class="col-md col-md-offset-2" (ngSubmit)="onSubmit()">
      <form [formGroup]="myForm">
          <div class="form-group">
              <div>
                  <label for="uname">Username :</label>
                  <input type="text" id="uname" class="form-control"
                         formControlName="userName"></div>

              
              <div>
                  <label for="fname">First Name :</label>
                  <input type="text" id="fname" class="form-control"
                         formControlName="firstName"></div>

              <div>
                  <label for="lname">Last Name :</label>
                  <input type="text" id="lname" class="form-control"
                         formControlName="lastName">
              </div>

              <div>
                  <label for="pass">Password :</label>
                  <input type="password" id="pass" class="form-control"
                         formControlName="password">
              </div>

              <div>
                  <label for="email">Email :</label>
                  <input type="text" id="email" class="form-control"
                         formControlName="email">
              </div>

          </div>
          <button class="btn btn-primary" [disabled]="!myForm.valid" type="submit">Sign me up!</button>
      </form>
  </div>
  `
})
export class RegisterComponent implements OnInit{


    myForm: FormGroup;

    onSubmit(){

        console.log("hi");
        this.myForm.reset();


    }
    ngOnInit() {
        this.myForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)


        });
}}