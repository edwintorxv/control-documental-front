import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [
    DashboardComponent, 
    NavbarComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule, 
    DashboardRoutingModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule
  ],
})
export class DashboardModule{

  
}
