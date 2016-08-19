/// <reference path="../../typings/globals/core-js/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var ng2_ui_auth_1 = require('ng2-ui-auth');
var http_1 = require('@angular/http');
// github login
var GITHUB_CLIENT_ID = '##GITHUB_ID##';
var DEFAULT_POST_HEADER = {
    'Content-Type': 'application/json'
};
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    ng2_ui_auth_1.NG2_UI_AUTH_PROVIDERS({
        defaultHeaders: DEFAULT_POST_HEADER,
        providers: { github: { clientId: GITHUB_CLIENT_ID } }
    })
]);
//# sourceMappingURL=main.js.map