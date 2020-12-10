export class LocationUtils {
  public static locationApiToSimple(location: any) {
    if (location.adm4) {
      return {
        adm1: location.adm4?.adm3?.adm2?.adm1?.id,
        adm2: location.adm4?.adm3?.adm2?.id,
        adm3: location.adm4?.adm3?.id,
        adm4: location.adm4?.id,
      };
    }
    if (location.adm3) {
      return {
        adm1: location.adm3?.adm2?.adm1?.id,
        adm2: location.adm3?.adm2?.id,
        adm3: location.adm3?.id,
      };
    }
    if (location.adm2) {
      return {
        adm1: location.adm2?.adm1?.id,
        adm2: location.adm2?.id,
      };
    }
    if (location.adm1) {
      return {
        adm1: location.adm1?.id,
      };
    }
  }
}
