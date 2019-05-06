import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';
import {DietInterface} from '../../../interfaces/diet.interface';
import {Injectable} from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders()
};

@Injectable({
    providedIn: 'root'
})
export class DietService {

    private url = 'api/diet';

    constructor(
        private http: HttpClient
    ) {
    }

    getDiet(): Observable<DietInterface[]> {
        return this.http.get<DietInterface[]>(this.url).pipe(
            catchError(this.handleError<DietInterface[]>('getDiet', []))
        );
    }

    updateDiet(diet: DietInterface): Observable<DietInterface> {
        return this.http.put<DietInterface>(this.url, diet, httpOptions)
            .pipe(
                catchError(this.handleError('updateDiet', diet))
            );
    }

    addDay(day: DietInterface): Observable<DietInterface> {
        return this.http.post<DietInterface>(this.url, day, httpOptions).pipe(
            catchError(this.handleError('addDay', day))
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
