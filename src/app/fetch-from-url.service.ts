import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchFromURLService {

  private REST_API_SERVER = "https://api.publicapis.org/categories";

  constructor(
    private httpClient: HttpClient,
  ) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
