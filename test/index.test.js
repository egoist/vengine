import { compile } from '../src'

test('main', async () => {
  const html = await compile('<div>{{foo}}</div>')({ foo: 'foo' })

  expect(html).toBe(`<div data-server-rendered="true">foo</div>`)
})
