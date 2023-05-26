import run from './helpers/run';

it('should work', async () => {
  const stats = await run();

  expect(stats).toHaveProperty('assets');
});
