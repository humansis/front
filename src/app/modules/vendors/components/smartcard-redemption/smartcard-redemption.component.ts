import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from 'src/app/core/language/language';
import { LanguageService } from 'src/app/core/language/language.service';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';

@Component({
  selector: 'app-smartcard-redemption',
  templateUrl: './smartcard-redemption.component.html',
  styleUrls: ['./smartcard-redemption.component.scss'],
})
export class SmartcardRedemptionComponent implements OnInit {
  language: Language = this.languageService.selectedLanguage;

  @Input()
  purchasesToRedeem: PurchasesToRedeem;

  @Input()
  redeeming: boolean;

  @Output()
  redeem: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  canRedeem() {
    return (
      this.purchasesToRedeem?.purchases_ids &&
      this.purchasesToRedeem.purchases_ids.length > 0
    );
  }
}
