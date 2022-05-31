import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/materials.module';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from './layout/layouts.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoursesComponent } from './layout/courses/courses.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    CoursesComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutsModule,
    LayoutModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
