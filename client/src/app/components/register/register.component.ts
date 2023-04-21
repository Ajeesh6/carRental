import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){ }

//create reactive form for register form
registerFrom=this.fb.group({
  email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

register(){
  // alert('register success')

  // let userDetails=this.ds.userDetails

  var acno=this.registerFrom.value.email
  var uname=this.registerFrom.value.uname
  var pasw=this.registerFrom.value.psw
  if(this.registerFrom.valid){
  this.ds.register(uname,acno,pasw).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl("")
  },
  result=>{
    alert(result.error.message)
    this.router.navigateByUrl("")
  })
}
else{
  alert('invalid form')
}
}  


}
