import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { from, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})


export class AuthService {
  autSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient:HttpClient, private router:Router) { }
  singI(user){
   return this.httpClient.post<any>('http://localhost:4100/loguin', user)
  }

  loggI(){
   return !!localStorage.getItem("token");
  }

 /* loguin(user: UserI): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>('http://localhost:4100/loguin', user)
    .pipe(tap(
      (res: JwtResponse)=>{
        if(res){
         //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
          console.log(res);
        this.router.navigate(['/editor'])
        }
      }
    ));


  }*/
/*
  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem("ACCES_TOKEN", token);
    localStorage.setItem("EXPIRE_IN", token);
    this.token = token;
  }*/
}
