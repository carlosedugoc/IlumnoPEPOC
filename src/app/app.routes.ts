import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { PaginaComponent } from "./components/pagina/pagina.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'pagina', component: PaginaComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(routes);