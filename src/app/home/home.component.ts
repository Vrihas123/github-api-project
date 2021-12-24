import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApi } from '../service/rest-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usernameFromRoute:any;
  repoCount: number = 0;
  user: any;
  constructor(private _ActivatedRoute: ActivatedRoute, public restApi:RestApi) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => { 
      this.usernameFromRoute = params.get('username'); 
    });
    this.fetchUser();
  }

  fetchUser(){
    return this.restApi.getUserDetails(this.usernameFromRoute).subscribe((data: any) => {
      this.user = data;
      this.repoCount = data.public_repos;
      console.log(this.user);
    })
  }

}
