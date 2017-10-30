import Hello from './Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Hello.install = Vue => {
  Vue.component(Hello.name, Hello){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default Hello{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
