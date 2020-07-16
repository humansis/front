import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportMockService {
  constructor() {}

  /**
   * Export data
   * @param  key           key to define data to export (e.g. distributions)
   * @param  value         value to define data to export (e.g. projet_id)
   * @param  extensionType extension of the file
   * @param filters        the filters to apply to the data
   * @return               file to export
   */
  public export(
    key: string,
    value: any,
    extensionType: string,
    body = null,
    filters: any = null,
    ids: Array<string> = []
  ) {}

  public exportDistributionPdf(distributionId: number) {}

  public printVoucher(id: number, code: string) {}

  public printManyVouchers(bookletIds: number[]) {}

  public printInvoice(vendorId: number) {}

  public printOrganizationTemplate() {}
}
