import GameSavingLoader from '../app';

const dataList = [
  {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  }
];
const handler = test.each(dataList);

handler('testing GameSavingLoader class with promise', (expected) => {
  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(expected);
  });
});

test('testing GameSavingLoader class with error', async () => {
  JSON.parse = () => {throw new Error('ошибка')};
  await expect(GameSavingLoader.load()).rejects.toThrow(new Error('ошибка'));
});