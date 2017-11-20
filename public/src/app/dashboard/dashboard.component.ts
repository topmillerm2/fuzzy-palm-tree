import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls=[]
  user: number
  stringSearch: string = ""
  shownPolls = []
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.get()
    this.getId()
  }

  get(){
    this._apiService.getAll()
    .then((data)=>{
      console.log("then", data)
      this.polls = data
      this.shownPolls = data
      console.log(this.polls)
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }
  getId(){
    this._apiService.getUser()
    .then((data)=>{
      console.log("then", data)
      this.user = data._id
      console.log(this.user)
      console.log(this.polls)   
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }

  searchNotes(){
    console.log(this.stringSearch)
    this.shownPolls = this.polls.filter((poll)=>{
      return poll.question.toLowerCase().includes(this.stringSearch);
    })
  }

  del(identity){
    this._apiService.delP({number: identity})
    .then((data)=>{
      console.log("then", data)
      this.get()  
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }


}

