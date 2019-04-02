import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';
import {FoodInterface} from '../../../interfaces/food.interface';
import {Injectable} from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders()
};

@Injectable({ providedIn: 'root' })
export class FoodService {

    private url = 'api/food';

    constructor(
        private http: HttpClient
    ) {
    }

    getFood(): Observable<FoodInterface[]> {
        return this.http.get<FoodInterface[]>(this.url).pipe(
            catchError(this.handleError<FoodInterface[]>('getFood', []))
        );
    }

    updateFood(food: any): Observable<any> {
        return this.http.put<FoodInterface>(this.url, food, httpOptions)
            .pipe(
                catchError(this.handleError('updateFood', food))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
