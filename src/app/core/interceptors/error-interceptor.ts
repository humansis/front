import { Injectable } from '@angular/core';
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEventType
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URL_BMS_API } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { GlobalText } from '../../../texts/global';

const api = URL_BMS_API;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public snackbar : MatSnackBar
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let reqMethod : String = req.method;

        return next.handle(req).pipe(
            catchError(
                (error: any, caught: Observable<HttpEvent<any>>) => {
                    this.snackErrors(error);
                    return new Observable<HttpEvent<any>>(error);
                }
            )
        );
    }

    snackErrors(response : any) {
        if (response.message || (response.status && response.statusText && response.error) ) {
            if(response.status && response.statusText && response.error) {
                this.snackbar.open(response.statusText + ' (' + response.status + ') - ' + response.error, '', {duration: 5000, horizontalPosition: 'center'});
            } else {
                this.snackbar.open(response.message, '', {duration: 5000, horizontalPosition: 'center'});
            }
        } else {
            this.snackbar.open(GlobalText.TEXTS.error_interceptor_msg, '', {duration: 5000, horizontalPosition: 'center'});
        }
    }

}
