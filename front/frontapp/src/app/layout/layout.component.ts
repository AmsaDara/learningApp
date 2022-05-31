import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Menu } from './menu.moddel';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e'
    },
    {
      title: 'Student',
      icon: 'cast_for_education',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Courses',
          icon: 'cast_for_education',
          link: '/courses',
          color: '#ff7f0e'
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers'
        }
      ]
    }
  ];
}

// export class LayoutComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
