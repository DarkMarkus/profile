import reducer, { initialState } from './reducer';

it('exports a reducer function as default', () => {
  expect(reducer).toBeInstanceOf(Function);
});

it('exports a reducer function as default', () => {
  expect(initialState).toHaveProperty('app');
});
