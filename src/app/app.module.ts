import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatButtonModule } from '@angular/material/button';

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
import { ImagerotateComponent } from './main/imagerotate/imagerotate.component';
import { ImageexpanderComponent } from './main/imageexpander/imageexpander.component';
import { TestimonalComponent } from './main/testimonal/testimonal.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { ParallexComponent } from './main/parallex/parallex.component';

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
    ImageoverlapComponent,
    ImagerotateComponent,
    ImageexpanderComponent,
    TestimonalComponent,
    ContactusComponent,
    ParallexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
