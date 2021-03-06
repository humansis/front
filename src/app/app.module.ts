import { DatePipe, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { setAppInjector } from './app-injector';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { HeaderMobileComponent } from './components/headers/header-mobile/header-mobile.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { RequestDisplayComponent } from './components/headers/request-display/request-display.component';
import { httpInterceptorProviders } from './core/interceptors/index-interceptors';
import { UpdateService } from './core/service-worker/update.service';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { ReportsModule } from './modules/reports/reports.module';
import { CustomDateAdapter } from './shared/adapters/date.adapter';
import { SharedModule } from './shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { LogsModule } from './modules/logs/logs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProfileComponent,
    HeaderMobileComponent,
    HeaderComponent,
    RequestDisplayComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DeviceDetectorModule,
    SharedModule,
    NgSelectModule,

    // Reporting
    ReportsModule,
    LogsModule,

    // Routing
    AppRouting,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    DatePipe,
    UpdateService,
    httpInterceptorProviders,
    TitleCasePipe,
    CustomDateAdapter,
  ],
  bootstrap: [AppComponent],
  exports: [HistoryTableComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
