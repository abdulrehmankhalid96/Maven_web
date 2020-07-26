import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  // NotificationComponent
  // UsersComponent
  {
     path:'Notification',
     component:NotificationComponent
  },
  {
    path:'Users',
    component:UsersComponent
 },
  {
    path: 'Commoditise',
    component:CommoditiesComponent,
    data: {
      title: 'Commoditise'
    }
  },
  {
    path: 'Chat',
    component:ChatComponent,
    data: {
      title: 'Chat'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
