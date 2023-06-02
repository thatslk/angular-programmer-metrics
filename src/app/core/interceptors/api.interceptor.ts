import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor, HttpRequest,
  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const gitlabRequest = req.clone({ url: `https://gitlab.com${req.url}` });
        return next.handle(gitlabRequest);
    }

}