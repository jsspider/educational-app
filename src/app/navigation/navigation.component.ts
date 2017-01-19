import { Component } from '@angular/core';

@Component({
    selector: 'ea-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.scss']
})
export class NavigationComponent {
    private routes = [
        { link: '/settings', icon: 'glyphicon glyphicon-cog' }
    ];

    constructor () {}
}