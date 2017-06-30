import Vue from 'vue'
import header from './assets/component/header.vue'
import content from './assets/component/content.vue'


new Vue({
  el: '#header',
  render: h => h(header)

})

new Vue({
    el: '#content',
    render: h => h(content)
})
