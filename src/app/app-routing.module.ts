import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartModule, BarComponent, PieChartComponent } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { GradeusageComponent } from './gradeusage/gradeusage.component';
import { PieComponent } from './graph/pie/pie.component';
import { HeaderComponent } from './header/header.component';


import { Ng2chartComponent } from './ng2chart/ng2chart.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TablesmatComponent } from './tablesmat/tablesmat.component';

const routes: Routes = [


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  {
    path:'tablemat' ,component:TablesmatComponent
  }
,
  { path: 'header', component:HeaderComponent ,
  children:[{

      path:'dashboard',component:DashboardComponent
    },
    {
      path:'date', component:DateComponent
    },
    {
      path:'pie',component:PieComponent
    }

  ]}

,{
  path:'bar',component:BarComponent
},
{
  path:'ng',component:Ng2chartComponent
},
{
  path:'grade',component:GradeusageComponent
}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
