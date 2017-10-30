// 组件安装器
import './style/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let componentsList = {
  Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
let {{name}} = Vue => {
  Object.keys(componentsList).forEach(key => {
    Vue.use(componentsList[key]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({{name}}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {{name}}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
