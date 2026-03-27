import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WorkoutService {
    constructor(private http: HttpClient){

    }

    public message() {
        return "Message from service";
    }

    public getPosts() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    public getUsers() {
        return this.http.get("https://fake-json-api.mock.beeceptor.com/users").pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    public getCompanies() {
        return this.http.get("https://fake-json-api.mock.beeceptor.com/companies").pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) { 
        console.log(error, "An Error Occured");
        return throwError(() => error);
    }
}