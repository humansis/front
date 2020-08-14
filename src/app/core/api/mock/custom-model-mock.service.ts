import { CustomModel } from 'src/app/models/custom-models/custom-model';
import { English } from '../../language/translations/language-english';
import { of } from 'rxjs';

export abstract class CustomModelMockService {
  // Language
  public language = new English();

  customModelPath: string;

  constructor() {}

  protected setCustomModelPath(path: string) {
    this.customModelPath = path;
  }

  public get(filter?: any, sort?: any, pageIndex?: number, pageSize?: number) {
    return of();
  }

  public create(body: any) {
    return of();
  }

  public update(id: number, body: any) {
    return of();
  }

  public delete(id: number, parentId?: any, justification?: string) {
    return of();
  }

  protected makeUrl(): string {
    return `${this.customModelPath}`;
  }

  public requestLogs(id: number) {}

  public fillFiltersWithOptions(filters: CustomModel) {}

  public fillWithOptions(object1?: Object, object2?: Object) {}
}
