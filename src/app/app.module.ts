import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { PdfComponent } from './resume/pdf/pdf.component';
import { RealEstateComponent } from './portfolio/components-portfolio/real-estate/real-estate.component';
import { BillboardsComponent } from './portfolio/components-portfolio/billboards/billboards.component';
import { CataloguesComponent } from './portfolio/components-portfolio/catalogues/catalogues.component';
import { ReactComponent } from './portfolio/components-portfolio/react/react.component';
import { AngularComponent } from './portfolio/components-portfolio/angular/angular.component';
import { MenuComponent } from './portfolio/components-portfolio/menu/menu.component';
import { ContactComponent } from './resume/contact/contact.component';
import { ContactDetailsPopupComponent } from './resume/contact-details-popup/contact-details-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ResumeComponent,
    FooterComponent,
    PdfComponent,
    RealEstateComponent,
    BillboardsComponent,
    CataloguesComponent,
    ReactComponent,
    AngularComponent,
    MenuComponent,
    ContactComponent,
    ContactDetailsPopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
