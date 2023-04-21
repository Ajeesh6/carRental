import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(uname: any, acno: any, pasw: any) {
    //create body data
    const data={uname,acno,pasw}
    return this.http.post('http://localhost:3000/register',data)
  }

  login(email: any, pasw: any) {

    const data={email,pasw}
    return this.http.post("http://localhost:3000/login",data)
  }

  carData(){
    return this.http.get("http://localhost:3000/carData")
  }

  carDetails(carId:any){
    const data={carId}
    return this.http.post("http://localhost:3000/carDetails",data)
  }

  rentCar(email:any,carData:any){
    const data={email,carData}
    return this.http.post("http://localhost:3000/rentCar",data)

  }

  rentedList(email:any){
    const data={email}
    return this.http.post("http://localhost:3000/rentedList",data)
  }
}
