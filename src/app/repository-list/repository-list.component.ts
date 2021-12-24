import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../model/repository';
import { RestApi } from '../service/rest-api';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  
  @Input() usernameFromRoute: string = "";
  @Input() repoCount: number = 0;

  repos: Repository[];
  loading: boolean = false;
  pageNo: number = 1;
  lastPage: number;

  constructor(public restApi:RestApi) { }

  ngOnInit(): void {
    this.fetchUserRepositories(10, 1);
  }

  fetchUserRepositories(per_page: number, page: number) {
    this.loading = true;
    return this.restApi.getUserRepositories(this.usernameFromRoute, per_page, page).subscribe((data: Repository[]) => {
      this.loading = false;
      this.repos = data;
      this.pageNo = page;
      console.log(this.repos);
    })
  }

  getPage(page: number) {
      this.fetchUserRepositories(10, page);
  }

  goToFirstPage() {
    this.fetchUserRepositories(10, 1);
  }

  goToLastPage() {
    if(this.repoCount % 10 === 0)
      this.lastPage = this.repoCount/10;
    else
      this.lastPage = Math.ceil(this.repoCount/10);

    this.fetchUserRepositories(10, this.lastPage);
  }
}
