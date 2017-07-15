import { OpaqueToken, Provider } from '@angular/core';

export const JQUERY_TOKEN = new OpaqueToken('jQuery');

export function jQueryFactory() {
    return window['jQuery'];
}

export const JQUERY_PROVIDER: Provider = { provide: JQUERY_TOKEN, useFactory: jQueryFactory };


// This is the correct way to Depndancy Inject with OpaqueToken
