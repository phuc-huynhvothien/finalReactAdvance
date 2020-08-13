import functions  from './functions'

describe('Function Example test', () => {
  test('Total function should work as expeced', () => {
    const input = [1,2];
    const output = 3
    expect(functions.total(input[0],input[1])).toEqual(output);
  })

  test('Test check null', () => {
    expect(functions.isNull()).toBeNull();
  })

  test('Test check value', () => {
    const input = 3;
    const output = 3
    expect(functions.checkValue(3)).toEqual(output);
  })

  test('Test create user ', () => {
    // const user = { firstName: 'Nordic' }
    // user['lastName'] = 'Coder'
    const user = { firstName: 'Phuc' }
    user['lastName'] = 'Huynh'
    expect(functions.createUser()).toEqual(user)
  })
})