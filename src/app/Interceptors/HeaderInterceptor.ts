
import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const dummyrequest = req.clone({
            setHeaders: {
                'AuthKey': '12345', 'DeviceID': '85645',
                'content-type': 'application/json'
            }
        })
        console.log("Cloned Request"); 
        console.log(dummyrequest); 
        return next.handle(dummyrequest);
    }
}
