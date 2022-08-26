import { Route } from '@angular/router';
import { AuthSignOutComponent } from 'app/modules/admin/project/user/auth/sign-out/sign-out.component';

export const authSignOutRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignOutComponent
    }
];
