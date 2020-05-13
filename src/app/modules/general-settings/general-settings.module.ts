import { NgModule } from '@angular/core';

import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { DynamicSettingsComponent } from './containers/dynamic-settings/dynamic-settings.component';
import { GeneralSettingsComponent } from 'src/app/modules/general-settings/containers/general-settings/general-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { InstitutionsComponent } from './containers/institutions/institutions.component';
import { InstitutionTableComponent } from './components/institution-table/institution-table.component';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { InstitutionModalComponent } from './containers/institution-modal/institution-modal.component';

@NgModule({
  declarations: [
    DynamicSettingsComponent,
    GeneralSettingsComponent,
    InstitutionsComponent,
    InstitutionTableComponent,
    InstitutionFormComponent,
    InstitutionModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    GeneralSettingsRoutingModule,
    NgSelectModule,
  ],
})
export class GeneralSettingsModule {}
