import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(username: string, password: string): Observable<boolean> {
    return throwError(() => new Error('Not implemented.'));
  }
}
