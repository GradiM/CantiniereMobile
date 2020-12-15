import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { API_URL } from '../constants/api-url';

import { User /*UserOUT, UserIN*/ } from '../interfaces/user';
import { ImageOUT, ImageIN } from '../interfaces/image';

import { handleError } from '../constants/handle-http-errors';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  user(userId: number): Observable<User> { /*UserOUT*/
    return (
      this.http
        .get<User>(`${API_URL}/user/find/${userId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            console.log(results);
            return results;
          })
        )
    );
  }

  update(userId: number, user: User /*UserIN*/): Observable<User> { /*UserOUT*/
    return (
      this.http
        .patch<User>(`${API_URL}/user/update/${userId}`, user)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  userImage(userId: number): Observable<ImageOUT> {
    return (
      this.http
        .get<ImageOUT>(`${API_URL}/user/findimg/${userId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  updateImage(userId: number, image: ImageIN): any {
    return (
      this.http
        .patch<any>(`${API_URL}/user/updateimg/${userId}`, image)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }
}
