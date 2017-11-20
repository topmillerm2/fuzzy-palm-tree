import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  qId: string
  polls= []
  options = []
  count = []
  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this.qId = params.get('id')
    })
    console.log(this.qId)
    this.getPoll()
  }
  getPoll(){
    this._apiService.getPoll({number: this.qId})
    .then((data)=>{
      console.log("then", data)
      this.polls.push(data)
      this.options.push(data.optionOne)
      this.options.push(data.optionTwo)
      this.options.push(data.optionThree)
      this.options.push(data.optionFour)
      this.count.push(data.countOne)
      this.count.push(data.countTwo)
      this.count.push(data.countThree)
      this.count.push(data.countFour)
      console.log(this.count)
      console.log(this.options)
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }
  vote(idx){
    console.log(idx)
    this._apiService.addCount({number: this.qId, index: idx})
    .then((data)=>{
      console.log("then", data)
      this.refresh()
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }
  refresh(){
    this._apiService.getPoll({number: this.qId})
    .then((data)=>{
      console.log("then", data)
      this.polls= []
      this.options = []
      this.count = []
      this.polls.push(data)
      this.options.push(data.optionOne)
      this.options.push(data.optionTwo)
      this.options.push(data.optionThree)
      this.options.push(data.optionFour)
      this.count.push(data.countOne)
      this.count.push(data.countTwo)
      this.count.push(data.countThree)
      this.count.push(data.countFour)
    })
    .catch((error)=>{
      console.log("catch", error)
    })
  }

}
