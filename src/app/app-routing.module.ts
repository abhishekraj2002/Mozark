import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BenchmarkingComponent } from './benchmarking/benchmarking.component';




const routes: Routes = [
  // {
  //   path: '', redirectTo: 'login', pathMatch: "full"
  // },

  // {path: 'login',component: LoginComponent},
  {path: 'monitoring',component: MonitoringComponent,
    //canActivate: [AuthGuard]
},
{path: 'benchmarking',component: BenchmarkingComponent,
//canActivate: [AuthGuard]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
