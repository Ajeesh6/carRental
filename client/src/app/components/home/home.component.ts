import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  carList:any

  constructor(private ds:DataService,private router:Router){}

  ngOnInit(): void {

    if(!localStorage.getItem("currentEmail")){
      alert('please login')
      this.router.navigateByUrl("")
    }
    
    this.ds.carData().subscribe((result:any)=>{
        this.carList=result.data
        console.log(this.carList);
        
    })
  }

  logout(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentEmail')
    this.router.navigateByUrl("")
  }

}
