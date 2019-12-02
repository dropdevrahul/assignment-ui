import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { AuthGuard } from './auth/guard';
import { AuthComponent } from './auth/auth.component';
import { HttpConfigInterceptor } from './interceptors/CustomHttpInterceptor';

const appRoutes: Routes = [
    { path: 'inventory-management', component: InventoryManagementComponent, canActivate: [AuthGuard] },
    { path: 'login', component: AuthComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    InventoryManagementComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { useHash: true }
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
    providers: [
      AuthGuard,
      { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
