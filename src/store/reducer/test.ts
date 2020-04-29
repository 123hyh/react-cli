// eslint-disable-next-line no-unused-vars
import {ActionParams} from '../index';

export declare type TestType = {
  testID: number;
};

export const testStore = {
  testID: 1,
};
/**
 * 测试 test reducer
 * @param {object} store
 * @param {object} action
 * @return {object}
 */
export function testReducer(
    store: TestType = testStore,
    action: ActionParams,
): TestType {
  switch (action.type) {
    case 'ADD_ID':
      return {testID: store.testID += 1};
  }
  return store;
}
