import { Language } from 'src/app/core/language/language';

export interface TableHeader {
  languageKey?: keyof Language;
  name?: string;
  key: string;
  transform?: (value) => string;
}
