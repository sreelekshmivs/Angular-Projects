import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  login:Login=new Login();
  logins: Observable <Login[]>;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit() {
    this.logins=this.authService.getLoginDet();
    this.loginForm=this.formBuilder.group({
      uname: ['',Validators.compose([Validators.required])],
      pwd:['',[Validators.required]]
    });

  }

  get formControls()
  {
    return this.loginForm.controls;
  }
  loginUser()
  {
    this.login.uname=this.loginForm.controls.uname.value;
    this.login.pwd=this.loginForm.controls.pwd.value;
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else
    {
     
    }
    this.toastr.error('Invalid','No')
    
  }

}