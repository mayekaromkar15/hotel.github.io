import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LandingComponent } from './main/landing/landing.component';
import { AboutComponent } from './main/about/about.component';
import { OverviewComponent } from './main/overview/overview.component';
import { ReservationComponent } from './main/reservation/reservation.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ImagezoomerComponent } from './main/imagezoomer/imagezoomer.component';
import { ImageoverlapComponent } from './main/imageoverlap/imageoverlap.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    OverviewComponent,
    ReservationComponent,
    NavbarComponent,
    ImagezoomerComponent,
    ImageoverlapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
