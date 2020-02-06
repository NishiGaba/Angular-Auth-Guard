import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to dashboard
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);