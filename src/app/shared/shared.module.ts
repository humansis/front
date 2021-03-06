import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatNativeDateModule,
  MatOptionModule,
  MatRippleModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CountoModule } from 'angular2-counto';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { FormatCamelCasePipe } from 'src/app/shared/pipes/format-camel-case.pipe';
import { ThousandsPipe } from 'src/app/shared/pipes/thousands.pipe';
import { UppercaseFirstPipe } from 'src/app/shared/pipes/uppercase-first.pipe';
import { BoxDashboardComponent } from '../components/box/box-dashboard/box-dashboard.component';
import { BoxPropertiesComponent } from '../components/box/box-properties/box-properties.component';
import { BoxSettingComponent } from '../components/box/box-setting/box-setting.component';
import { DatePickerComponent } from '../components/date-pickers/date-picker/date-picker.component';
import { MonthPickerComponent } from '../components/date-pickers/month-picker/month-picker.component';
import { YearPickerComponent } from '../components/date-pickers/year-picker/year-picker.component';
import { DisplayFieldComponent } from '../components/display-field/display-field.component';
import { HintErrorComponent } from '../components/hint-error/hint-error.component';
import { AdmFormComponent } from '../components/adm-form/adm-form.component';
import { IconSvgComponent } from '../components/icon-svg/icon-svg.component';
import { ModalAddBeneficiaryComponent } from '../components/modals/modal-add-beneficiary/modal-add-beneficiary.component';
import { ModalAddCommodityComponent } from '../components/modals/modal-add-commodity/modal-add-commodity.component';
import { ModalAddCriteriaComponent } from '../components/modals/modal-add-criteria/modal-add-criteria.component';
import { ModalAddComponent } from '../components/modals/modal-add/modal-add.component';
import { ModalAssignComponent } from '../components/modals/modal-assign/modal-assign.component';
import { ModalConfirmationComponent } from '../components/modals/modal-confirmation/modal-confirmation.component';
import { ModalDeleteBeneficiaryComponent } from '../components/modals/modal-delete-beneficiary/modal-delete-beneficiary.component';
import { ModalDeleteComponent } from '../components/modals/modal-delete/modal-delete.component';
import { ModalDetailsComponent } from '../components/modals/modal-details/modal-details.component';
import { ModalEditComponent } from '../components/modals/modal-edit/modal-edit.component';
import { ModalFieldsComponent } from '../components/modals/modal-fields/modal-fields.component';
import { ModalLanguageComponent } from '../components/modals/modal-language/modal-language.component';
import { ModalRequestsComponent } from '../components/modals/modal-requests/modal-requests.component';
import { PlaceholderBoxlineComponent } from '../components/placeholders/placeholder-boxline/placeholder-boxline.component';
import { PlaceholderPanelComponent } from '../components/placeholders/placeholder-panel/placeholder-panel.component';
import { PlaceholderStepperComponent } from '../components/placeholders/placeholder-stepper/placeholder-stepper.component';
import { PlaceholderSummaryComponent } from '../components/placeholders/placeholder-summary/placeholder-summary.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { TableMobileServerComponent } from '../components/table/table-mobile-server/table-mobile-server.component';
import { TableMobileComponent } from '../components/table/table-mobile/table-mobile.component';
import { TableServerComponent } from '../components/table/table-server/table-server.component';
import { TableComponent } from '../components/table/table.component';
import { MobilePressDirective } from '../core/directives/mobile-press.directive';
import { AdministrationComponent } from '../modules/administration/admnistration/administration.component';
import { DashboardComponent } from '../modules/dashboard/dashboard/dashboard.component';
import { ProjectComponent } from '../modules/projects/project/project.component';
import { LoginComponent } from '../modules/public/login/login.component';
import { ScannerComponent } from '../modules/vouchers/scanner/scanner.component';
import { VouchersComponent } from '../modules/vouchers/vouchers/vouchers.component';
import { SsoComponent } from '../modules/public/sso/sso.component';
import { JsonFormComponent } from '../components/json-form/json-form.component';
import { AdministrativeAreaInputComponent } from 'src/app/components/administrative-area/administrative-area-input.component';
import { CleanTableComponent } from 'src/app/components/clean-table/clean-table.component';
import { ExportButtonComponent } from 'src/app/components/export-button/export-button.component';
import { MdePopoverModule } from '@material-extended/mde';
import { HistoryTableComponent } from 'src/app/components/history-table/history-table.component';
import { ImportedDataComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries-import/imported-data/imported-data.component';
import { LocationFormComponent } from 'src/app/modules/beneficiaries/containers/update-beneficiary/location-form/location-form.component';
import { BeneficiaryFormComponent } from 'src/app/modules/beneficiaries/containers/update-beneficiary/beneficiary-form/beneficiary-form.component';
import { UpdateBeneficiaryComponent } from 'src/app/modules/beneficiaries/containers/update-beneficiary/update-beneficiary.component';
import { DataMappingComponent } from 'src/app/modules/beneficiaries/containers/data-mapping/data-mapping.component';
import { BeneficiariesImportComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries-import/beneficiaries-import.component';
import { DataValidationComponent } from 'src/app/modules/beneficiaries/containers/data-validation/data-validation.component';
import { BeneficiariesComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries/beneficiaries.component';
import { LivelihoodPipe } from './pipes/livelihood.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { UtcDatepickerComponent } from 'src/app/components/utc-datepicker/utc-datepicker.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule, // to use instead of BrowserModule if you are using lazyloaded module
    FormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule,
    MatOptionModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatBadgeModule,
    MatRippleModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressBarModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatChipsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatGridListModule,
    CountoModule,
    NgSelectModule,
    NgPipesModule,
    RecaptchaModule,
    ZXingScannerModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MdePopoverModule,
  ],
  declarations: [
    // Shared Components
    AdministrativeAreaInputComponent,
    UtcDatepickerComponent,
    CleanTableComponent,
    MobilePressDirective,
    LoginComponent,
    DashboardComponent,
    BeneficiariesComponent,
    BeneficiariesImportComponent,
    DatePickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    ProjectComponent,
    IconSvgComponent,
    BoxDashboardComponent,
    TableComponent,
    TableMobileComponent,
    TableServerComponent,
    TableMobileServerComponent,
    ModalAddCriteriaComponent,
    ModalAddCommodityComponent,
    ModalFieldsComponent,
    ModalDeleteComponent,
    ModalDeleteBeneficiaryComponent,
    ModalAddComponent,
    ModalAddBeneficiaryComponent,
    ModalEditComponent,
    ModalAssignComponent,
    ModalDetailsComponent,
    ModalLanguageComponent,
    ModalConfirmationComponent,
    ModalRequestsComponent,
    BoxSettingComponent,
    BoxPropertiesComponent,
    DisplayFieldComponent,
    HintErrorComponent,
    AdmFormComponent,
    DataMappingComponent,
    DataValidationComponent,
    PlaceholderSummaryComponent,
    PlaceholderBoxlineComponent,
    PlaceholderPanelComponent,
    PlaceholderStepperComponent,
    UpdateBeneficiaryComponent,
    BeneficiaryFormComponent,
    LocationFormComponent,
    ImportedDataComponent,
    HistoryTableComponent,
    ThousandsPipe,
    FormatCamelCasePipe,
    UppercaseFirstPipe,
    VouchersComponent,
    ScannerComponent,
    SettingsComponent,
    AdministrationComponent,
    SsoComponent,
    JsonFormComponent,
    ExportButtonComponent,
    LivelihoodPipe,
  ],
  entryComponents: [
    ModalDeleteComponent,
    ModalDeleteBeneficiaryComponent,
    ModalEditComponent,
    ModalDetailsComponent,
    ModalLanguageComponent,
    ModalAddComponent,
    ModalAddBeneficiaryComponent,
    ModalAddCriteriaComponent,
    ModalAddCommodityComponent,
    ModalAssignComponent,
    ModalConfirmationComponent,
    ModalRequestsComponent,
  ],
  exports: [
    // Shared Components
    AdministrativeAreaInputComponent,
    UtcDatepickerComponent,
    CleanTableComponent,
    LoginComponent,
    DashboardComponent,
    BeneficiariesComponent,
    BeneficiariesImportComponent,
    ProjectComponent,
    IconSvgComponent,
    BoxDashboardComponent,
    BoxPropertiesComponent,
    DisplayFieldComponent,
    DatePickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    HintErrorComponent,
    AdmFormComponent,
    TableComponent,
    TableMobileComponent,
    TableMobileServerComponent,
    TableServerComponent,
    ModalAddCriteriaComponent,
    ModalAddCommodityComponent,
    ModalDeleteComponent,
    ModalDeleteBeneficiaryComponent,
    ModalDetailsComponent,
    ModalLanguageComponent,
    ModalAddComponent,
    ModalAddBeneficiaryComponent,
    ModalAssignComponent,
    BoxSettingComponent,
    MatCheckboxModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule,
    MatOptionModule,
    MatButtonModule,
    MatRippleModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatSelectModule,
    DataMappingComponent,
    DataValidationComponent,
    MatDividerModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatAutocompleteModule,
    PlaceholderSummaryComponent,
    PlaceholderBoxlineComponent,
    PlaceholderPanelComponent,
    PlaceholderStepperComponent,
    SettingsComponent,
    AdministrationComponent,
    JsonFormComponent,
    UppercaseFirstPipe,
    LivelihoodPipe,
    SsoComponent,
    ExportButtonComponent,
    HistoryTableComponent,
  ],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeFcasUAAAAAAAoPCzr6-GPZP-K2xKtO4BXjMtE',
      } as RecaptchaSettings,
    },
  ],
})
export class SharedModule {}
