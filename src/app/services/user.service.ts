import { Injectable } from '@angular/core';
import { AuthenticatedEditUser } from '../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  editUser(data: AuthenticatedEditUser){
    return this.http.put(
      `${environment.API_URL}/${environment.api.user.put}`,
      data
    );
  }
}
