import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  items: MenuItem[]=[];
  linearMenu:MenuItem[]=[];
  constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig) {}
  opened: boolean= true;

  toggleSidebar()
  {
     this.opened= !this.opened;
  }
  iconVisible(){


  }
  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-pw pi-file',
          routerLink: "/home"
      },
      {
          label: 'Görevlerim',
          icon: 'pi pi-fw pi-pencil',
          
          items: [
              {label: 'Günlük', icon: 'pi pi-fw pi-calendar-minus', routerLink:"/gunluk"},
              {label: 'Haftalık', icon: 'pi pi-fw pi-calendar-plus',routerLink:"/haftalik"},
              {label: 'Aylık', icon: 'pi pi-fw pi-calendar-times',routerLink:"/aylik"}
          ]
      },
      {
        label: 'Takvim',
        icon: 'pi pi-fw pi-calendar',
        routerLink: "/takvim"
      },
      {
          label: 'Yardım',
          icon: 'pi pi-fw pi-question',
        //   items: [
        //       {
        //           label: 'Contents',
        //           icon: 'pi pi-pi pi-bars'
        //       },
        //       {
        //           label: 'Search', 
        //           icon: 'pi pi-pi pi-search', 
  
        //       }
        //   ]
      },
      {
          label: 'İletişim',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Hakkında',
                  icon: 'pi pi-fw pi-pencil',
                  routerLink: "/iletisim"
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
         
              }
          ]
      }
  ];
  this.linearMenu = [
    {
  
        icon: 'pi pi-pw pi-file',
        routerLink: "/home"
    },
    {
        
        icon: 'pi pi-fw pi-pencil',      
    },
    {

      icon: 'pi pi-fw pi-calendar',
      routerLink: "/takvim"
    },
    {
        icon: 'pi pi-fw pi-question',
    },
    {
        label: 'Ayarlar',
        icon: 'pi pi-fw pi-cog',

    }
];
}

update() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
  this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}
}
