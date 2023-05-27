import run from './helpers/run';

it('should transform Liquid to LiquidX', async () => {
  const stats = await run();

  expect(stats).toHaveProperty('assets.0');
  expect(stats.assets[0].content.toString()).toMatchSnapshot();
});
