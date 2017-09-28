import { CookieService } from 'ngx-cookie';
import { Injectable }     from '@angular/core';
import { CanActivate,Router }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private cookieService:CookieService, private router: Router){

    }
  canActivate() {
    console.log('AuthGuard#canActivate called');
    if(this.cookieService.get('account')!=null){
        return true;
    }else{
        this.router.navigate(['/login']);
    }
  
  }
}