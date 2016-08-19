import { Component } from '@angular/core';
import { Auth } from 'ng2-ui-auth';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './app.html'
})
export class AppComponent {
    constructor(private auth: Auth) { }

    authenticate(provider: string) {
        this.auth.authenticate(provider)
            .subscribe(() => () => console.log("Working"));
    }
}
