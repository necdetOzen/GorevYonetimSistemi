import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AylikComponent } from './components/aylik/aylik.component';
import { GunlukComponent } from './components/gunluk/gunluk.component';
import { HaftalikComponent } from './components/haftalik/haftalik.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { TakvimComponent } from './components/takvim/takvim.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'gunluk',
    component:GunlukComponent
  },
  {
    path:'haftalik',
    component:HaftalikComponent
  },
  {
    path:'aylik',
    component:AylikComponent
  }
  ,
  {
    path:'takvim',
    component:TakvimComponent
  }
  ,
  {
    path:'iletisim',
    component:IletisimComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
