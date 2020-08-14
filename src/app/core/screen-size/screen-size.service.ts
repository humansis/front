import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DisplayType, Mobile, Other } from 'src/app/models/constants/screen-sizes';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  mobileDisplay = new Mobile();
  otherDisplay = new Other();

  displayTypeSource: BehaviorSubject<DisplayType>;

  public constructor(private deviceService: DeviceDetectorService) {
    const currentDisplay: DisplayType = this.deviceService.isDesktop()
      ? this.otherDisplay
      : this.mobileDisplay;
    this.displayTypeSource = new BehaviorSubject<DisplayType>(currentDisplay);
  }
}
