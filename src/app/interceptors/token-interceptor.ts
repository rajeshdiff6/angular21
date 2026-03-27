import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceA } from "../services/service-a";

export function TokenInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
):Observable<HttpEvent<unknown>> {
    const http = inject(ServiceA);
    const newReq = req.clone({
        headers: req.headers.append('x-http-token', http.data)
    })

    return next(newReq);
}