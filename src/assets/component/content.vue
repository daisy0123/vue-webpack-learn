<template>
  <div id="content">
    <h2>Vue 练习</h2>
    <div class="con">
      <p>双向绑定示例:</p>
      <p>{{message}}</p>
      <input type="text" v-model="message"/>
    </div>
    <div class="con">
      <p>Vue.js的常用指令:</p>
      <ul v-for="item in lists">
        <li>{{item.text}}</li>
      </ul>
      <b>v-if例子：</b>
      <p v-if="if_data.yes">Yes!</p>
      <p v-if="if_data.no">No!</p>
      <p v-if="if_data.age >= 25">Age: {{ if_data.age }}</p>
      <p v-if="if_data.name.indexOf('jack') >= 0">Name: {{ if_data.name }}</p>
      <b>v-show例子：v-show也是条件渲染指令，和v-if指令不同的是，使用v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style属性。</b>
      <p v-show="if_data.yes">Yes!</p>
      <p v-show="if_data.no">No!</p>
      <p v-show="if_data.age >= 25">Age: {{ if_data.age }}</p>
      <p v-show="if_data.name.indexOf('jack') >= 0">Name: {{ if_data.name }}</p>
      <b>v-else指令:可以用v-else指令为v-if或v-show添加一个“else块”。v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能</b>
      <p v-if="else_data.age >= 25">Age: {{ else_data.age }}</p>
      <p v-else>Sex: {{ else_data.sex }}</p>
      <p>---------------------分割线---------------------</p>
      <p v-show="else_data.name.indexOf('keep') >= 0">Name: {{ else_data.name }}</p>
      <!--<p v-else>Sex: {{ else_data.sex }}</p>-->
      <b>v-bind指令:v-bind指令可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是HTML元素的特性（attribute）</b>
      <ul class="pagination">
        <li v-for="n in page.pageCount">
          <a href="javascripit:void(0)" v-bind:class="page.activeNumber === n ? 'active' : ''">{{ n }}</a>
        </li>
      </ul>
      <b>v-on指令:v-on指令用于给监听DOM事件</b>
      <p><input type="text" v-model="message"></p>
      <p>
        <!--click事件直接绑定一个方法-->
        <button v-on:click="greet">Greet</button>
      </p>
      <p>
        <!--click事件使用内联语句-->
        <button v-on:click="say('Hi')">Hi</button>
      </p>
      <p>v-bind和v-on的缩写:Vue.js为最常用的两个指令v-bind和v-on提供了缩写方式。v-bind指令可以缩写为一个冒号，v-on指令可以缩写为@符号。</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      message: 'Hello, Vue.js!',
      lists:[{text:"v-if指令"},{text:"v-show指令"},{text:"v-else指令"},{text:"v-for指令"},{text:"v-bind指令"},{text:"v-on指令"}],
      if_data: {
        yes: true,
        no: false,
        age: 28,
        name: 'jack'
      },
      else_data: {
        age: 24,
        name: 'keepfool',
        sex: 'Male'
      },
      page: {
        activeNumber: 1,
        pageCount: 10
      }
    }
  },
  methods: {
    greet: function() {
      alert(this.message);
    },
    say: function(msg) {
      alert(msg)
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/content.scss'
</style>
