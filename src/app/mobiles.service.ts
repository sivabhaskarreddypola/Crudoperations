import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MobilesService {
  mobiles:any;

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/Mobiles";
  fetchmobiles(){
    return this.http.get(this.url);
  }
  removeMobiles(id:any){
    return this.http.delete(this.url+"/"+id);
  }
  postMobiles(body:any){
    return this.http.post(this.url,body);

  }
  putMobiles(body:any){
     return this.http.put(this.url+"/"+body.id,body);
  }
 
}
