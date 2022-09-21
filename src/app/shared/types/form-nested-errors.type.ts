import { ILanguage } from './languages.type';

export type IFormInternalizationErrors = {
  [key in ILanguage]: boolean;
};
