import { Routes } from '@angular/router';
import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';
import { DashboardAdmComponent } from './admins/dashboard-adm/dashboard-adm.component';
import { ConteudoClientComponent } from './client/conteudo-client/conteudo-client.component';

export const routes: Routes = [
  {
    path:'',title:'Home -- ',
    loadComponent:()=>import('./client/home-client.component'),
    children:[
      {
        path:'',title:'Perfil --',
        component:ConteudoClientComponent
      },
      {
        path:'dashboard',title:'Dashboard --',
        component:DashboardClientComponent
      }
    ]
  },
  {
    path:'v1',title:'Dashboard -- ',
    loadComponent:()=>import('./admins/home-adm.component'),
    children:[
      {
        path:'dashboard',title:'Dashboard --',
        component:DashboardAdmComponent
      }
    ]
  },
  {
    path:'login',title:'Login -- ',
    loadComponent:()=>import('./components/login/login.component')
  },
  {
    path:'register',title:'Dashboard -- ',
    loadComponent:()=>import('./components/register/register.component')
  },
  {
    path:'',pathMatch:'full',redirectTo:''
  },
  {path:'**',redirectTo:''}
];
