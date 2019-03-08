import { Component, OnInit, ViewChild } from '@angular/core';

import { TableComponent } from '../table.component';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';

@Component({
    selector: 'app-table-mobile-distribution',
    templateUrl: './table-mobile-distribution.component.html',
    styleUrls: ['../table-mobile/table-mobile.component.scss']
})
export class TableMobileDistributionComponent extends TableComponent {

    getImageName(t2: String) {
        return (t2.substring(26).split('.')[0]);
    }

    goToDistribution(id) {
        if (!this.networkService.getStatus()) {
            this._cacheService.get(AsyncacheService.DISTRIBUTIONS + '_' + id + '_beneficiaries')
                .subscribe(
                    result => {
                        if (!result) {
                            this.snackbar.error(this.table.cache_no_distribution);
                        } else {
                            this.router.navigate(['/projects/distributions/' + id]);
                        }
                    }
                );
        } else {
            this.router.navigate(['/projects/distributions/' + id]);
        }
    }
}
