import { Component } from '@angular/core';

@Component({
    selector: 'ea-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.scss']
})
export class NavigationComponent {
    private routes = [
        { link: '/home', icon: 'glyphicon glyphicon-home'},
        { link: '/settings', icon: 'glyphicon glyphicon-cog' },
        { link: '/profile', icon: 'glyphicon glyphicon-user' }
    ];

    constructor () {}
}