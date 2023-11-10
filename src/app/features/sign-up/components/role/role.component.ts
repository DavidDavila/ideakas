import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListSecondariesButtonsTypes } from 'src/app/shared/components/listSecondariesButtons/types/list-secondaries-buttons.types';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {
  buttons: ListSecondariesButtonsTypes[] = [
    {
      icon: 'fad fa-lightbulb',
      title: 'Tengo una idea',
      link: 'creator',
      desc: 'Estoy buscando socios que se impliquen en mi proyecto',
    },
    {
      icon: 'fad fa-handshake',
      title: 'Quiero colaborar',
      desc: 'Estoy buscando una idea para involucrarme',
      link: 'collaborator',
    },
    // {
    //   icon: 'fa-money-bill-trend-up',
    //   title: 'Soy un inversor',
    //   desc: 'Estoy buscando un proyecto para financiarlo',
    //   link: 'investor',
    // },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}
  onButtonClicked(index: number) {
    this.router.navigate([this.buttons[index].link], {
      relativeTo: this.route,
    });
  }
}
