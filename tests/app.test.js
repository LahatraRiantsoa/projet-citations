const citationAleatoire = require('../src/app');

test('La fonction retourne une citation non vide (string)', () => {
  const result = citationAleatoire();
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(0);
});
 