import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{

  carId:any
  carData:any
  email:any

  constructor(private ds:DataService,private router:ActivatedRoute){}

  ngOnInit(): void {
    
    this.router.params.subscribe((data:any)=>{
      this.carId=data.id
    })

    
      this.ds.carDetails(this.carId).subscribe((result:any)=>{
        this.carData=result.data
        console.log(this.carData);
        
      })
      

  }

  rentCar(){
    this.email=JSON.parse(localStorage.getItem("currentEmail") || "")
    
    this.ds.rentCar(this.email,this.carData).subscribe((result:any)=>{
      alert(result.message)
    },
    result =>{ alert(result.error.message)})
  }

  

}
