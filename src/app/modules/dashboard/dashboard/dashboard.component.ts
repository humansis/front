import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/api/user.service';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { MapService } from 'src/app/core/external/map.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { ModalService } from 'src/app/core/utils/modal.service';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { Distribution } from 'src/app/models/distribution';
import { DistributionService } from '../../../core/api/distribution.service';
import { GeneralService } from '../../../core/api/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  distributionData: MatTableDataSource<Distribution>;
  public nameComponent = 'dashboard_title';
  public actualCountry: string;

  distributionClass = Distribution;
  // Loaders
  loadingTable = true;
  loadingSummary = true;

  public deletable = false;
  public editable = false;

  public summary = [];

  // Screen size
  public currentDisplayType: DisplayType;
  private screenSizeSubscription: Subscription;

  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  constructor(
    private mapService: MapService,
    public _distributionService: DistributionService,
    public _generalService: GeneralService,
    public modalService: ModalService,
    private userService: UserService,
    public languageService: LanguageService,
    private screenSizeService: ScreenSizeService,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.screenSizeSubscription = this.screenSizeService.displayTypeSource.subscribe(
      (displayType: DisplayType) => {
        this.currentDisplayType = displayType;
      }
    );

    this.getSummary();
    this.checkDistributions();

    this.deletable = this.userService.hasRights('ROLE_DISTRIBUTIONS_MANAGEMENT');
    this.editable = this.userService.hasRights('ROLE_DISTRIBUTIONS_MANAGEMENT');
  }

  ngOnDestroy() {
    this.screenSizeSubscription.unsubscribe();
    this.mapService.removeMap();
  }
  ngAfterViewInit(): void {
    this.mapService.createMap('map');
  }

  /**
   * get the distributions list to display on dashboard
   * check if it is cached, otherwise get it from the api
   */

  checkDistributions(): void {
    this.loadingTable = true;
    this._distributionService.get().subscribe(
      (apiDistributions: Array<any>) => {
        if (!apiDistributions) {
          apiDistributions = [];
        }
        this.distributionData = new MatTableDataSource();
        const distributions = apiDistributions.map((apiDistribution) => {
          return Distribution.apiToModel(apiDistribution);
        });
        this.mapService.addDistributions(distributions);
        this.distributionData = new MatTableDataSource(distributions);
        this.loadingTable = false;
      },
      (error) => {
        this.distributionData = new MatTableDataSource();
        this.loadingTable = false;
      }
    );
  }

  /**
   * Get summary information
   * @return array
   */
  getSummary(): void {
    this.loadingSummary = true;
    this._generalService.getSummary().subscribe((response) => {
      if (response) {
        this.loadingSummary = false;
        this.summary = response;
      }
    });
  }

  openDialog(dialogDetails: any): void {
    this.modalService.openDialog(Distribution, this._distributionService, dialogDetails);
  }
}
