import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../../../core/language/language.service';
import { Language } from '../../../../core/language/language';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';

@Component({
  selector: 'app-smartcard-summary',
  templateUrl: './smartcard-summary.component.html',
  styleUrls: ['./smartcard-summary.component.scss'],
})
export class SmartcardSummaryComponent implements OnInit {
  @Input()
  totalPurchases: number;
  @Input()
  sumOfPurchases: number;
  @Input()
  purchasesToRedeem: PurchasesToRedeem[] = [];
  @Input()
  sumToRedeem: number;
  @Input()
  currency: string;
  @Output()
  redeem: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output()
  showHistory: EventEmitter<undefined> = new EventEmitter<undefined>();

  language: Language = this.languageService.selectedLanguage;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  redeemPurchases(purchasesIds: number[]) {
    if (this.purchasesToRedeem.length > 0) {
      this.redeem.emit(purchasesIds);
    }
  }
}
