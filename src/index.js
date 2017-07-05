import Vue from 'vue'
import * as compiler from 'vue-template-compiler'
import * as serverRenderer from 'vue-server-renderer'
import es2015compile from 'vue-template-es2015-compiler'

function compile(str, opts) {
  const { render: renderBody } = compiler.compile(str, opts)
  const render = es2015compile(`function render() {${renderBody}}`)
  // eslint-disable-next-line no-new-func
  const renderFunction = new Function(`${render};return render.call(this);`)
  return (locals = {}) => {
    return new Promise((resolve, reject) => {
      const component = {
        name: 'component',
        props: Object.keys(locals),
        render: renderFunction
      }
      const vm = new Vue({
        render(h) {
          return h(component, { props: locals })
        }
      })
      const renderer = serverRenderer.createRenderer()
      renderer.renderToString(vm, (err, html) => {
        if (err) return reject(err)
        resolve(html)
      })
    })
  }
}

function render(str, locals, opts) {
  const template = compile(str, opts)
  return template(locals)
}

export {
  compile,
  render
}
