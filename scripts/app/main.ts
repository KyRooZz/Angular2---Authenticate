/// <reference path="../../typings/globals/core-js/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { NG2_UI_AUTH_PROVIDERS } from 'ng2-ui-auth';
import { HTTP_PROVIDERS } from '@angular/http';

// github login
const GITHUB_CLIENT_ID = '##GITHUB_ID##';
const DEFAULT_POST_HEADER: { [name: string]: string } = {
    'Content-Type': 'application/json'
};

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({
        defaultHeaders: DEFAULT_POST_HEADER,
        providers: { github: { clientId: GITHUB_CLIENT_ID } }
    })
]);
