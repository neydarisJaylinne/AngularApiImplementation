import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExploreComponent } from './explore/explore.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ContentComponent } from './content/content.component';
import { AsociateButtonComponent } from './asociate-button/asociate-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    ExploreComponent,
    ViewPageComponent,
    ContentComponent,
    AsociateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
