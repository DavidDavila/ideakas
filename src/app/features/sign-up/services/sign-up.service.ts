import { Injectable } from '@angular/core';
import { RolesEnum } from 'src/app/core/types/roles.types';
import { UserT } from '../types/user.types';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private role!: UserT;
  private im!: RolesEnum[];
  constructor() {}
  setRole(userType: UserT) {
    this.role = userType;
  }
  setIm(im: RolesEnum[]) {
    this.im = im;
  }
  sendSignUpData() {
    return {
      role: this.role,
      im: this.im,
    };
  }
}
