import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { API_URL } from '../constants/api-url';

import { handleError } from '../constants/handle-http-errors';
import { OrderOUT, OrderIN, PriceOUT } from '../interfaces/order';
import { QuantityIN, QuantityOUT } from '../interfaces/quantity';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(private http: HttpClient, /*private snackBar: MatSnackBar, */private router: Router) {}

  getTodayOrdersOfUser(userId: number): Observable<OrderOUT[]> {
    return (
      this.http
        .get<OrderOUT[]>(`${API_URL}/order/findallforusertoday/${userId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  getOngoingOrdersOfUser(userId: number): Observable<OrderOUT[]> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('status', '0'); // status 0 (CREATED)

    return (
      this.http
        .get<OrderOUT[]>(`${API_URL}/order/findallforuser/${userId}`, { params })
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  getAllOrdersOfUser(userId: number): Observable<OrderOUT[]> {
    let params = new HttpParams();
    params = params.append('status', '1'); // status 1 (DELIVERED)

    return (
      this.http
        .get<OrderOUT[]>(`${API_URL}/order/findallforuser/${userId}`, { params })
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  add(order: OrderIN): Observable<OrderOUT> {
    return (
      this.http
        .put<OrderOUT>(`${API_URL}/order/add`, order)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  update(orderId: number, order: OrderIN): Observable<OrderOUT> {
    console.log(order);
    return (
      this.http
        .patch<OrderOUT>(`${API_URL}/order/update/${orderId}`, order)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  delete(orderId: number): Observable<OrderOUT> {
    return (
      this.http
        .patch<OrderOUT>(`${API_URL}/order/cancel/${orderId}`, {}) // <- (?_?)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  makeOrder(orderId: number, constrainId: number): Observable<OrderOUT> {
    return (
      this.http
        .patch<OrderOUT>(`${API_URL}/order/deliverandpay/${orderId}/${constrainId}`, {}) // <- (?_?)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  computePrice(orderId: number, constrainId: number): Observable<PriceOUT> {
    return (
      this.http
        .get<PriceOUT>(`${API_URL}/order/computeprice/${orderId}/${constrainId}`)
        .pipe(
          map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          })
        )
    );
  }

  addToOrder(
    orderToUpdateId: number,
    quantity: QuantityOUT[],
    userId: number,
    type: string,
    mealId?: number,
    menuId?: number): void {
    // On crée une variable newQuantity qui contiendra toutes nos quantités(repas/menus)
    // de la commande plus la nouvelle
    const newQuantity: QuantityIN[] = [];

    // On parcours l'array contenant toutes les quantités(repas/menus)
    // de la commande
    quantity.forEach(element => {
      // A chaque boucle,
      // on ajoute, à l'array newQuantity, les données qui nous intéressent
      newQuantity.push({
        quantity: element.quantity,
        mealId: element.meal ? element.meal.id : null,
        menuId: element.menu ? element.menu.id : null
      });
    });

    // Puis, on ajoute, à l'array newQuantity, notre nouvelle quantité
    newQuantity.push({
      quantity: 1,
      mealId: mealId ? mealId : null,
      menuId: menuId ? menuId : null
    });

    // Enfin, on ajoute toutes les quantités dans la variable updatedContent
    const updatedContent: OrderIN = {
      userId,
      constraintId: 2,
      quantity: newQuantity
    };

    this.update(orderToUpdateId, updatedContent).subscribe(
      () => {
        if (type === 'menu')
        {
          // const snackBarRef = this.snackBar.open(`Menu ajouté au panier`, '', {
          //   duration: 2000,
          //   verticalPosition: 'bottom'
          // });
          // snackBarRef.afterDismissed().subscribe(() => {
          //   this.router.navigate(['orders']);
          // });
        }
        else if (type === 'meal')
        {
          // const snackBarRef = this.snackBar.open(`Plat ajouté au panier`, '', {
          //   duration: 2000,
          //   verticalPosition: 'bottom'
          // });
          // snackBarRef.afterDismissed().subscribe(() => {
          //   this.router.navigate(['orders']);
          // });
        }
      },
      (error) => {
        console.log(error);
        if (error.status === 412 && error.exceptionMessage === 'L\'heure authorisée pour passer une commande est dépassée') {
          alert('Erreur : L\'ajout au panier ne peut se faire qu\'avant 10h30');
        }
      }
    );
  }

  createOrder(userId: number, type: string, mealId?: number, menuId?: number): void {
    const newQuantity: QuantityIN = {
      quantity: 1, // Dans la finalité nombre choisi par le User
      mealId: mealId ? mealId : null,
      menuId: menuId ? menuId : null
    };

    const order: OrderIN = {
      userId,
      constraintId: 2,
      quantity: [newQuantity],
    };

    this.add(order).subscribe(
      () => {
        if (type === 'menu')
        {
          // const snackBarRef = this.snackBar.open(`Menu ajouté au panier`, '', {
          //   duration: 2000,
          //   verticalPosition: 'bottom'
          // });
          // snackBarRef.afterDismissed().subscribe(() => {
          //   this.router.navigate(['orders']);
          // });
        }
        else if (type === 'meal')
        {
          // const snackBarRef = this.snackBar.open(`Plat ajouté au panier`, '', {
          //   duration: 2000,
          //   verticalPosition: 'bottom'
          // });
          // snackBarRef.afterDismissed().subscribe(() => {
          //   this.router.navigate(['orders']);
          // });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  orderMaker(userId: number, type: string, mealId?: number, menuId?: number): void {
    this.getOngoingOrdersOfUser(userId).subscribe(
      (order) => {
        if (typeof order === 'undefined' || order.length === 0) {
          this.createOrder(userId, type, mealId, menuId);
        } else {
          this.addToOrder(order[0].id, order[0].quantity, userId, type, mealId, menuId);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
