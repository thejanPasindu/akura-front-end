import { HttpHeaders } from '@angular/common/http';
export class Headers {
    static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'X-Requested-With': 'my-auth-token'
        })
      };
}
