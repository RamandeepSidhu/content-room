import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Component({
    selector: 'app-cookie-acceptance',
    templateUrl: './cookie-acceptance.component.html',
    styleUrls: ['./cookie-acceptance.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state(
                'void',
                style({
                    opacity: 0,
                })
            ),
            transition('void <=> *', animate('300ms ease-in-out')),
        ]),
    ],
})
export class CookieAcceptanceComponent implements OnInit {
    @Output() closed: EventEmitter<boolean> = new EventEmitter();
    isCookies = false;
    dashboard_url = environment.dashboard_url;

    ngOnInit(): void {
        if (this.getCookie('cookie')?.length) {
            this.isCookies = true;
        }
    }

    public getCookie(name: string) {
        const ca: Array<string> = document.cookie.split(';');
        const caLen: number = ca.length;
        const cookieName = `${name}=`;
        let c: string;

        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    public deleteCookie(cookieName: string) {
        this.setCookie({ name: cookieName, value: '', expireDays: -1 });
    }

    public setCookie(params: any) {
        const d: Date = new Date();
        d.setTime(
            d.getTime() +
            (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000
        );
        document.cookie =
            (params.name ? params.name : '') +
            '=' +
            (params.value ? params.value : '') +
            ';' +
            (params.session && params.session == true
                ? ''
                : 'expires=' + d.toUTCString() + ';') +
            'path=' +
            (params.path && params.path.length > 0 ? params.path : '/') +
            ';' +
            (location.protocol === 'https:' &&
                params.secure &&
                params.secure == true
                ? 'secure'
                : '');

        this.isCookies = true;
    }

    setCookiesData() {
        this.setCookie({
            name: 'cookie',
            value: 'item1',
            session: true,
        });
    }

    modalClosed() {
        this.isCookies = true;
        this.closed.emit(true);
    }
}
