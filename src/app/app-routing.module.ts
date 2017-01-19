import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { TestComponent } from './test.component';

const appRoutes: Routes = [
    { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}