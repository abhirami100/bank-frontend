import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // register(acno: string | null | undefined, pswd: string | null | undefined, uname: string | null | undefined) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private api:HttpClient) { }

  //1. login API -asynchronous
  login(acno:any,pswd:any){
    const body={
      acno,
      pswd
    }
    return this.api.post('http://localhost:3000/login',body)
  }
   //2. register API -asynchronous
   register(acno:any,pswd:any,uname:any){
    const body={
      acno,
      pswd,
      uname
    }
    return this.api.post('http://localhost:3000/register',body)
  }

  //to insert token in http header
  getToken(){
    //1.get token from local storage
      const token = localStorage.getItem("token")

    //2.create http header
    let headers = new HttpHeaders()

    //3.insert token inside the header
    if(token){
      headers = headers.append("access-token",token)
      //to acheive function overloading
      options.headers=headers

    }
    return options
  }

  //3.deposit API - asynchronous
  deposit(acno:any,pswd:any,amount:any){
    const body={
      acno,
      pswd,
      amount
    }
    return this.api.post('http://localhost:3000/deposit',body,this.getToken())
  }



    //4.withdraw API - asynchronous
    withdraw(acno:any,pswd:any,amount:any){
      const body={
        acno,
        pswd,
        amount
      }
      return this.api.post('http://localhost:3000/withdraw',body,this.getToken())
    }
    //5.transaction API -asynchronous

    transaction(acno:any){
      return this.api.get('http://localhost:3000/transaction/'+acno,this.getToken())
    }

    //6. delete API -asynchronous

    deleteAcno(acno:any){
      return this.api.delete('http://localhost:3000/deleteAcno/'+acno,this.getToken())
    }


  
}

