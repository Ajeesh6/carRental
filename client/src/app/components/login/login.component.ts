import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder){}

 

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  ngOnInit(): void {

  }

  login() {
    var email = this.loginForm.value.email
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      this.ds.login(email, psw).subscribe((result: any) => {
        localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
        localStorage.setItem("currentEmail",JSON.stringify(result.currentEmail))
       
        alert(result.message)
        this.router.navigateByUrl('home')
      },
        result => {
          alert(result.error.message)

        })

    }
    else {
      alert('invalid form')
    }
  }
}







