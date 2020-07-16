import { Injectable } from '@angular/core';
import { CustomModelMockService } from './custom-model-mock.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistributionMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public complete(distributionId) {
    return of();
  }

  public getOne(id: number) {
    return of();
  }

  public getByProject(idProject: number) {
    return of();
  }

  public getQrVoucherByProject(idProject) {
    return of();
  }

  public getBeneficiaries(id: number) {
    return of();
  }

  public getAssignableBeneficiaries(id: number) {
    return of();
  }

  public setValidation(id: number) {
    return of();
  }

  public export(option: string, extensionType: string, id: number) {
    return of();
  }

  public refreshPickup(id: number) {
    return of();
  }

  public transaction(id: number, code: string) {
    return of();
  }

  public logs(id: number) {
    return of();
  }

  public sendCode(id: number) {
    return of();
  }

  public exportSample(sample: any, extensionType: string) {
    return of();
  }

  public checkProgression(id: number) {
    return of();
  }

  public addNotes(generalReliefs: any[]) {
    return of();
  }

  public distributeGeneralReliefs(ids: number[]) {
    return of();
  }

  visit(id: string) {
    return of();
  }
}
