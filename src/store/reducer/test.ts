import { ActionParams } from '../index';

export declare type TestType = {
  testID: number;
};

export const testStore = {
  testID: 1,
};
export function testReducer(store: TestType = testStore, action: ActionParams) {
  return store;
}
