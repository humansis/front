import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
    selector: 'app-table-vouchers',
    templateUrl: './table-vouchers.component.html',
    styleUrls: ['../table.component.scss', './table-vouchers.component.scss']
})
export class TableVouchersComponent extends TableComponent {



    print(element) {
        this.snackbar.info(this.table.voucher_print_starting);
        return this._exportService.printVoucher(element.id);
    }
}