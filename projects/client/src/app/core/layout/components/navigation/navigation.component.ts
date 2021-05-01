import { Component, OnInit } from '@angular/core';

import { tuiIconTimeLarge } from '@taiga-ui/icons';
import { TuiBorders } from '@taiga-ui/kit';
import {
  NavigationService,
  NavRoute,
} from '../../../services/navigation.service';
@Component({
  selector: 'gllrm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  readonly tuiIconTimeLarge = tuiIconTimeLarge;
  constructor(private navigationService: NavigationService) {}

  readonly borders = TuiBorders.TopBottom;
  ngOnInit(): void {}

  items = [
    {
      title: 'Configuración',
      children: [
        {
          title: 'Areas',
          route: '/areas',
        },
        {
          title: 'Asignaturas',
          route: '/asignaturas',
        },
        {
          title: 'Sedes',
          route: '/sedes',
        },
        {
          title: 'Grados',
          route: '/grados',
        },
        {
          title: 'Grupos',
          route: '/grupos',
        },
        {
          title: 'Institución',
          route: '/institucion',
        },
      ],
    },
  ];

  toggleMenu(route: NavRoute) {
    this.navigationService.push(route);
  }
}
