//prendre app

// const citationAleatoire = require('../src/app');

// test('La fonction retourne une citation non vide (string)', () => {
//   const result = citationAleatoire();
//   expect(typeof result).toBe('string');
//   expect(result.length).toBeGreaterThan(0);
// });

//prendre via api
const getCitation = require('../src/api');

test('API retourne une citation valide ', async () => {
    const result = await getCitation();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    // expect(typeof result).toBe('string');
    // expect(result.length).toBeGreaterThan(10);
});