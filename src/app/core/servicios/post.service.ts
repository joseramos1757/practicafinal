import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:any;

  constructor(private http:HttpClient) {
    this.url=environment.baseURL;
   }
   listarPosts()
   {
    return this.http.get(this.url+"posts");
   }
}
