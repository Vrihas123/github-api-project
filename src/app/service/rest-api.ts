import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Repository } from '../model/repository';
import { BaseResponse } from '../model/base-response';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class RestApi {

    baseUrl = 'https://api.github.com';

    constructor(private http: HttpClient, private _router: Router) {}

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }  

    getUserDetails(username: string): Observable<User> {
        return this.http.get<User>(this.baseUrl + '/users/' + username)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getUserRepositories(username: string, per_page: number, page: number): Observable<Repository[]> {
        return this.http.get<Repository[]>(this.baseUrl + '/users/' + username + '/repos',
          {
            params:{
              per_page: per_page,
              page: page
            }
          }
        ).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getRepositoryLanguages(username: string, reponame: string): Observable<BaseResponse> {
      return this.http.get<BaseResponse>(this.baseUrl + '/repos/' + username + '/' + reponame + '/languages')
      .pipe(
          retry(1),
          catchError(this.handleError)
      )
    }

    handleError(error:any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        console.log(errorMessage);
        return throwError(() => errorMessage);
     }
}
