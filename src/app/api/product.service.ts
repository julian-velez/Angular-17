import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class productsService {
    private readonly _http= inject(HttpClient)

    getAllproducts():Observable<any>{
      return this._http.get('https://fakestoreapi.com/products')
    }
}