import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rented-list',
  templateUrl: './rented-list.component.html',
  styleUrls: ['./rented-list.component.css']
})
export class RentedListComponent implements OnInit {

  email: any
  rentedList: any

  constructor(private ds: DataService) { }

  ngOnInit(): void {

    this.email = JSON.parse(localStorage.getItem("currentEmail") || "")

    this.ds.rentedList(this.email).subscribe((data: any) => {
      this.rentedList = data["data"]
      console.log(this.rentedList);

    })
     


    
    

  }
  
  
}