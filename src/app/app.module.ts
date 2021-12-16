import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {PanelMenuModule} from 'primeng/panelmenu';
import { AppComponent } from './app.component';

import {ImageModule} from 'primeng/image';

import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";

import { MegaMenuModule } from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';

import { GunlukComponent } from './components/gunluk/gunluk.component';
import { HaftalikComponent } from './components/haftalik/haftalik.component';
import { AylikComponent } from './components/aylik/aylik.component';

import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
//import { SidebarModule } from 'ng-sidebar';
import {BadgeModule} from 'primeng/badge';
import { TakvimComponent } from './components/takvim/takvim.component';
import {SidebarModule} from 'primeng/sidebar';
//import {FullCalendarModule} from 'primeng/fullcalendar';

import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {SpeedDialModule} from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { CheckboxModule } from 'primeng/checkbox';
import {GMapModule} from 'primeng/gmap'
import {ChartModule} from 'primeng/chart';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    HeaderComponent,
    GunlukComponent,
    HaftalikComponent,
    AylikComponent,
    TakvimComponent,
    IletisimComponent,
    
  ],
  imports: [
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ImageModule,
    TieredMenuModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    SidebarModule,
    BadgeModule,
    FullCalendarModule,
    SpeedDialModule,
    ToastModule,
    GMapModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
