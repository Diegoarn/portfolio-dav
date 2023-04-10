import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PdfComponent } from './resume/pdf/pdf.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { RealEstateComponent } from './portfolio/components-portfolio/real-estate/real-estate.component';
import { BillboardsComponent } from './portfolio/components-portfolio/billboards/billboards.component';
import { CataloguesComponent } from './portfolio/components-portfolio/catalogues/catalogues.component';
import { AngularComponent } from './portfolio/components-portfolio/angular/angular.component';
import { ReactComponent } from './portfolio/components-portfolio/react/react.component';
import { MenuComponent } from './portfolio/components-portfolio/menu/menu.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pdf', component: PdfComponent },
  {
    path: 'portfolio/components-portfolio/real-estate',
    component: RealEstateComponent,
  },
  {
    path: 'portfolio/components-portfolio/billboards',
    component: BillboardsComponent,
  },
  {
    path: 'portfolio/components-portfolio/catalogues',
    component: CataloguesComponent,
  },
  {
    path: 'portfolio/components-portfolio/angular',
    component: AngularComponent,
  },
  {
    path: 'portfolio/components-portfolio/react',
    component: ReactComponent,
  },
  {
    path: 'portfolio/components-portfolio/menu',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
