import { Component, Input, OnInit } from '@angular/core';
import { BaseResponse } from '../model/base-response';
import { RestApi } from '../service/rest-api';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() repo: any;
  languages: any;
  languageList: string[] = [];
  constructor(public restApi:RestApi) { }

  ngOnInit(): void {
    this.fetchRepositoryLanguages();
  }

  fetchRepositoryLanguages() {
    return this.restApi.getRepositoryLanguages(this.repo.owner.login, this.repo.name).subscribe((data: BaseResponse) => {
      this.languages = data;
      for(var key in this.languages)
        if(this.languages.hasOwnProperty(key))
          this.languageList.push(String(key));
      console.log(this.languageList);
    })
  }

}
