import { IFormInternalizationErrors } from '../types';

export const flatNestedObject = (object: Object) => {
  return Object.keys(object || {}).reduce((acc, cur) => {
    if (typeof object[cur] === 'object') {
      acc = { ...acc, ...flatNestedObject(object[cur]) };
    } else {
      acc[cur] = object[cur];
    }

    return acc;
  }, {} as IFormInternalizationErrors);
};
