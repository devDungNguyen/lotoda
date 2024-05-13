import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLogin()) {
    return true;
  }

  inject(Router).navigate(['/auth/login']);
  return false;
};
