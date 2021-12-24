import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {

  @Input() user:any;
  user_name: string;
  bio:string;
  location:string;
  twitter_url:string = "";
  github_url:string;
  avatar:string;
  repos_count:number;

  constructor() { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.user);
    this.user_name = this.user.name;
    this.bio = this.user.bio;
    this.location = this.user.location;
    if(this.user.twitter_username)
      this.twitter_url = "https://twitter.com/" + this.user.twitter_username;
    this.github_url = this.user.html_url;
    this.avatar = this.user.avatar_url;
    this.repos_count = this.user.public_repos;
  }
  ngOnInit(): void {
  }
}
