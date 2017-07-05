# vv <sup>[![NPM version](https://v.egoist.moe/npm/vv.svg)](https://npmjs.com/package/vv)</sup>

[![NPM downloads](https://img.shields.io/npm/dm/vv.svg?style=flat)](https://npmjs.com/package/vv) [![CircleCI](https://circleci.com/gh/egoist/vv/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vv/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add vv
```

## Usage

```js
const vv = require('vv')

const template = vv.compile(`<ul>
  <li v-for="item in list">{{ item }}</li>
</ul>`)

template({
  list: ['foo', 'bar', 'baz']
}).then(html => {
  //=> console.log(html)
  <ul data-server-rendered="true">
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
  </ul>
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vv** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vv/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
