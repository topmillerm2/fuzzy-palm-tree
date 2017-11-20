import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll: object = {
    question: "", 
    optionOne: "", 
    optionTwo: "", 
    optionThree: "", 
    optionFour: ""
  }
  constructor(private _router: Router, private _apiService: ApiService) { }

  ngOnInit() {
  }

  addQuestion(){
    this._apiService.addQ(this.poll)
    .then((data)=>{
      console.log("then", data)
      // this.poll = data
      this._router.navigate(['/dashboard'])    
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }

}
