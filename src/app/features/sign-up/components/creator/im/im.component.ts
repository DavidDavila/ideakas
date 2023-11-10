import { Component } from '@angular/core';
import { ROLES } from '../../../../../core/const/roles.const';
import { RolesEnum } from '../../../../../core/types/roles.types';
import { SignUpService } from '../../../services/sign-up.service';

@Component({
  selector: 'app-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.scss'],
})
export class ImComponent {
  private readonly initialRoles = [RolesEnum.CEO];
  public roles = Object.values(ROLES).map((role) => ({
    ...role,
    checked: this.initialRoles.includes(role.name),
  }));
  buttonDisabled: boolean = false;
  constructor(private readonly signUpService: SignUpService) {
    this.signUpService.setRole('creator');
  }
  selectRole(name: RolesEnum, checked: boolean) {
    this.roles = this.roles.map((role) =>
      role.name === name ? { ...role, checked: checked } : role
    );
    this.buttonDisabled = !this.roles.some((role) => role.checked);
  }
  onContinue() {
    const im = this.roles
      .filter((role) => role.checked)
      .map((role) => role.name);
    this.signUpService.setIm(im);
  }
}
