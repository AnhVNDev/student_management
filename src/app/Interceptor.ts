import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
// import { APIService } from "./api.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(localStorage.getItem('id_token') != null){
            const token = localStorage.getItem('id_token');
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            const AuthRequest = request.clone({ headers: headers });
            return next.handle(AuthRequest)
         } else {
            return next.handle(request)
         }

    }
}
