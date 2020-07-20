import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

constructor(private _http:HttpClient) { }
fetchCoronaInfo()
{
  let url="https://corona.lmao.ninja/v2/countries/India";
  return this._http.get(url)
}
}
