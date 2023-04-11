import sortHealth from '../src';

test('test to sort an array of character objects', () => {
  const characters = [
    { name: 'мечник', health: 20 },
    { name: 'лучник', health: 100 },
    { name: 'копьеносец', health: 80 },
    { name: 'маг', health: 30 },
  ];
  const result = sortHealth(characters);
  expect(result).toEqual(
    [
      { name: 'лучник', health: 100 },
      { name: 'копьеносец', health: 80 },
      { name: 'маг', health: 30 },
      { name: 'мечник', health: 20 },
    ],
  );
});
