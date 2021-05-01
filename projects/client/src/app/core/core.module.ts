import { NgModule, Sanitizer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TuiRootModule,
  TuiNotificationsModule,
  TuiDialogModule,
  TuiSvgModule,
  TuiScrollbarModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/components/header/header.component';
import { TUI_SANITIZER } from '@taiga-ui/cdk';
import { TuiAccordionModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [MainLayoutComponent, NavigationComponent, HeaderComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    RouterModule,
    TuiSvgModule,
    TuiAccordionModule,
    TuiScrollbarModule,
    TuiLinkModule,
  ],
  exports: [
    MainLayoutComponent,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
  ],
})
export class CoreModule {}
