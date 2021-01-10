import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { API_URL } from '../constants/api-url';

import { MenuOUT } from '../interfaces/menu';
import { ImageOUT } from '../interfaces/image';

import { handleError } from '../constants/handle-http-errors';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  getMenusForThisWeek(): Observable<MenuOUT[]> {
    return (
      this.http
        .get<MenuOUT[]>(`${API_URL}/menu/findallavailablefortoday`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  getMenu(menuId: number): Observable<MenuOUT> {
    return (
      this.http
        .get<MenuOUT>(`${API_URL}/menu/find/${menuId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  getMenuImage(menuId: number): Observable<ImageOUT> {
    return (
      this.http
        .get<ImageOUT>(`${API_URL}/menu/findimg/${menuId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }
  
  listMenu(): Observable<Array<MenuOUT>> {
    const url: string = `${API_URL}/menu/findall`;
    return this.http.get<Array<MenuOUT>>(url)
  }
}
