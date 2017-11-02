import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()

export class ServiceCallService {
    
    public headers:any;

    constructor(private http:Http){}

                    
    getServiceCall(url:string): Observable < any >{
        
        return this.http.get(url,{headers: this.headers}).map(response => response);
     }   
        
    
}