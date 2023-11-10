import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListSecondariesButtonsTypes } from 'src/app/shared/components/listSecondariesButtons/types/list-secondaries-buttons.types';
import { SignUpService } from '../../../services/sign-up.service';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.scss'],
})
export class NeedComponent {
  showSlide: boolean = false;
  buttons: ListSecondariesButtonsTypes[] = [
    {
      icon: 'fad fa-people-arrows',
      title: 'Estoy buscando socios para mi proyecto',
      desc: 'Ayúdame a encontrar los socios perfectos',
    },
    {
      icon: 'fad fa-users-cog',
      title: 'Necesito incorporar más gente al equipo',
      desc: 'Tengo parcialmente mi equipo cubierto',
      link: 'collaborators',
    },
    {
      icon: 'fad fa-users',
      title: 'Tengo un equipo listo para comenzar',
      desc: 'Estamos comprometidos para alcanzar el éxito',
      link: 'collaborators',
    },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly signupService: SignUpService
  ) {}
  onButtonClicked(index: number) {
    let link = this.buttons[index].link;
    if (!link) {
      this.signupService.sendSignUpData();
      return this.router.navigate(['/welcome']);
    }
    return this.router.navigate([link], { relativeTo: this.route.parent });
  }
  onShowSlide(show: boolean) {
    this.showSlide = show;
  }
}
