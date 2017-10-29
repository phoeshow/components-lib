<template>
  <div>
    <me-hello></me-hello>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
